import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { StudentsServiceService } from './students-service.service';
import { Student } from '../../models/student';

import axios, { AxiosInstance } from 'axios';
import { User } from '../../models/user';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [SharedModule], // Import SharedModule
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentCrudComponent {
    studentForm: FormGroup;
    students: Student[] = [];
    selectedFile: File | null = null;
  
    constructor(
      private formBuilder: FormBuilder,
      private studentsService: StudentsServiceService
    ) {}
  
    ngOnInit(): void {
      this.studentForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cin: ['', Validators.required],
      });
  
      this.loadStudents(); // Load students on initialization
    }
  
    // Load students from the service
    loadStudents(): void {
      this.studentsService.findAll().then((students) => {
        this.students = students;
      });
    }
  
    // Handle form submission for adding a student
    addStudent(): void {
      if (this.studentForm.valid) {
        const user : User = this.studentForm.value;
        const student: Student = {
          user: user,
          id: null,
          courses: []
        };
        this.studentsService.addStudent(student).then((data:any) => {
          console.log('New student added:', data.data);
          const newStudent = data.data;
          this.students.push(newStudent); // Add the new student to the list
          this.studentForm.reset(); // Reset the form
        });
      }
    }
  
    // Handle file selection for uploading students
    onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0];
    }
  
    // Handle form submission for uploading students
    uploadStudents(): void {
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile, this.selectedFile.name);
        this.studentsService.uploadStudents(formData).then(() => {
          this.loadStudents(); // Reload students after upload
        });
      }
    }
  
    // Delete a student by ID
    deleteStudent(id: number): void {
      this.studentsService.delete(id).then(() => {
        this.students = this.students.filter(student => student.id !== id); // Remove student from the list
      });
    }
  
    // Edit student (Placeholder for future functionality)
    editStudent(student: Student): void {
      console.log('Edit student functionality', student);
    }
  }