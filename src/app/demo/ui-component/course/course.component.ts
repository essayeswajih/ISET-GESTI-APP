import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseServiceService } from './course-service.service';
import { CardComponent } from "../../../theme/shared/components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CardComponent, ReactiveFormsModule, CommonModule], // Add ReactiveFormsModule here
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit {

  courses: Course[] = [];
  courseForm: FormGroup;
  selectedFile: File;

  constructor(
    private courseService: CourseServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.loadCourses();  // Load courses when the component initializes
  }

  // Initialize the course form
  initializeForm() {
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      courseDescription: ['', Validators.required]
    });
  }

  // Load all courses
  loadCourses(): void {
    this.courseService.getCourses()
      .then((data) => {
        this.courses = data;  // Assign the data to the courses array
      })
      .catch((error) => {
        console.error('Error loading courses:', error);  // Handle any errors
      });
  }

  // Add a new course
  addCourse(): void {
    if (this.courseForm.invalid) {
      return;
    }

    const newCourse: Course = {
      id: null,
      courseName: this.courseForm.value.courseName,
      courseDescription: this.courseForm.value.courseDescription
    };

    this.courseService.createCourse(newCourse)
      .then((course) => {
        this.courses.push(course);  // Add the new course to the list
        this.courseForm.reset();  // Reset the form
      })
      .catch((error) => {
        console.error('Error adding course:', error);  // Handle any errors
      });
  }

  // Upload a list of courses (from a file)
  uploadCourses(): void {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.courseService.uploadCourses(formData)
      .then(() => {
        console.log('Courses uploaded successfully');
      })
      .catch((error) => {
        console.error('Error uploading courses:', error);  // Handle any errors
      });
  }

  // Handle file selection
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // Edit an existing course
  editCourse(course: Course): void {
    // Handle editing logic, possibly populating the form for editing
    console.log('Editing course:', course);
  }

  // Delete a course by ID
  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id)
      .then(() => {
        this.courses = this.courses.filter(course => course.id !== id);  // Remove course from the list
      })
      .catch((error) => {
        console.error('Error deleting course:', error);  // Handle any errors
      });
  }
}