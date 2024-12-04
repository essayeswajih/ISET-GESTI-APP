import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Professor } from '../../models/professor';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root',
})
export class ProfessorsServiceService {
  private axiosClient: AxiosInstance;
  private readonly baseUrl = 'http://localhost:9090/api/v1/admin/professors'; // Change this if necessary

  constructor() {
    this.axiosClient = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Get all professors
  async findAll(): Promise<Professor[]> {
    try {
      const response = await this.axiosClient.get('');
      return response.data.data as Professor[];
    } catch (error) {
      console.error('Error fetching professors:', error);
      return [];
    }
  }

  // Add a new professor
  async addProfessor(professor: Professor): Promise<Professor> {
    try {
      const response = await this.axiosClient.post('/', professor);
      return response.data as Professor;
    } catch (error) {
      console.error('Error adding professor:', error);
      throw new Error('Error adding professor');
    }
  }

  // Upload professors via file
  async uploadProfessors(formData: FormData): Promise<any> {
    try {
      const response = await this.axiosClient.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading professors:', error);
      throw new Error('Error uploading professors');
    }
  }

  // Delete professor by ID
  async delete(id: number): Promise<void> {
    try {
      await this.axiosClient.delete(`/${id}`);
    } catch (error) {
      console.error('Error deleting professor:', error);
    }
  }
}

