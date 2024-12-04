import { Injectable } from '@angular/core';

import axios, { AxiosInstance } from 'axios';
import { environment } from 'src/environments/environment';  // Make sure to configure the environment file
import { Course } from '../../models/course';  // Import the Course model

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private axiosInstance: AxiosInstance;
  private apiUrl: string = `http://localhost:9090/api/v1/admin/courses`;  // Ensure you set the correct API base URL in your environment

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Create a new course
  createCourse(course: Course) {
    return this.axiosInstance.post('', course)
      .then(response => response.data)
      .catch(error => this.handleError(error));
  }

  // Get all courses
  getCourses() {
    return this.axiosInstance.get('')
      .then(response => response.data)
      .catch(error => this.handleError(error));
  }

  // Get a course by ID
  getCourseById(id: number) {
    return this.axiosInstance.get(`/${id}`)
      .then(response => response.data)
      .catch(error => this.handleError(error));
  }

  // Update an existing course
  updateCourse(id: number, course: Course) {
    return this.axiosInstance.put(`/${id}`, course)
      .then(response => response.data)
      .catch(error => this.handleError(error));
  }

  // Delete a course by ID
  deleteCourse(id: number) {
    return this.axiosInstance.delete(`/${id}`)
      .then(response => response.data)
      .catch(error => this.handleError(error));
  }
  uploadCourses(formData: FormData): Promise<any> {
    return axios.post(`${this.apiUrl}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    })
    .then(response => {
      console.log('Courses uploaded successfully', response.data);
      return response.data;  // Return the response data (could be a success message or data)
    })
    .catch(error => {
      console.error('Error uploading courses', error);
      throw error;  // Throw error to be caught in the component
    });
  }

  // Handle errors
  private handleError(error: any) {
    console.error('API call failed:', error);
    throw error; // Re-throw the error so it can be handled by the component or further downstream
  }
}