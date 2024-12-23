import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Professor } from '../../models/professor';
import { ProfessorsServiceService } from './professors-service.service';
import { CardComponent } from "../../../theme/shared/components/card/card.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professors',
  standalone: true,
  imports: [CardComponent, ReactiveFormsModule, CommonModule], // Add ReactiveFormsModule here
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class ProfessorsComponent implements OnInit {
  professorForm: FormGroup;
  professors: Professor[] = [];
  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private professorsService: ProfessorsServiceService
  ) {}

  ngOnInit(): void {
    this.professorForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cin: ['', Validators.required],
    });

    this.loadProfessors(); // Load professors on initialization
  }

  // Load professors from the service
  loadProfessors(): void {
    this.professorsService.findAll().then((professors) => {
      this.professors = professors;
      console.log('Professors:', this.professors);
    });
  }

  // Handle form submission for adding a professor
  addProfessor(): void {
    if (this.professorForm.valid) {
      const user : User = this.professorForm.value;
      const professor: Professor = {
        user: user,
        id: null,
        courses: [],
        depList: []
      }
      this.professorsService.addProfessor(professor).then((data:any) => {
        console.log('New professor added:', data.data);
        const newProfessor = data.data;
        this.professors.push(newProfessor); // Add the new professor to the list
        this.professorForm.reset(); // Reset the form
      });
    }
  }

  // Handle file selection for uploading professors
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // Handle form submission for uploading professors
  uploadProfessors(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      this.professorsService.uploadProfessors(formData).then(() => {
        this.loadProfessors(); // Reload professors after upload
      });
    }
  }

  // Delete a professor by ID
  deleteProfessor(id: number): void {
    this.professorsService.delete(id).then(() => {
      this.professors = this.professors.filter(professor => professor.id !== id); // Remove professor from the list
    });
  }

  // Edit professor (Placeholder for future functionality)
  editProfessor(professor: Professor): void {
    console.log('Edit professor functionality', professor);
  }
}
