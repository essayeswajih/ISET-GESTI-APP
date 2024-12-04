import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Student } from '../../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {
    private axiosClient: AxiosInstance;
    private readonly baseUrl = 'http://localhost:9090/api/v1/admin/students';
  
    constructor() {
      this.axiosClient = axios.create({
        baseURL: this.baseUrl,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
    // Get all students
    async findAll(): Promise<Student[]> {
      try {
        const response = await this.axiosClient.get('');
        return response.data.data as Student[];
      } catch (error) {
        console.error('Error fetching students:', error);
        return []; // Empty array on error
      }
    }
  
    // Add a new student
    async addStudent(student: Student): Promise<Student> {
      try {
        const response = await this.axiosClient.post('/', student);
        return response.data as Student;
      } catch (error) {
        console.error('Error adding student:', error);
        throw new Error('Error adding student');
      }
    }
  
    // Upload students via file
    async uploadStudents(formData: FormData): Promise<any> {
      try {
        const response = await this.axiosClient.post('/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
      } catch (error) {
        console.error('Error uploading students:', error);
        throw new Error('Error uploading students');
      }
    }
  
    // Delete student by ID
    async delete(id: number): Promise<void> {
      try {
        await this.axiosClient.delete(`/${id}`);
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  }