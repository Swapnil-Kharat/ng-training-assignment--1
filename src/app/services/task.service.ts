import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }



  getData(endpoint: string, options?: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, options).pipe(
      catchError(this.handleError)
    );
  }

  // Common method for POST requests
  postData(endpoint: string, data: any, options?: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, options).pipe(
      catchError(this.handleError)
    );
  }

  // Common method for PUT requests
  putData(endpoint: string, data: any, options?: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data, options).pipe(
      catchError(this.handleError)
    );
  }

  // Common method for DELETE requests
  deleteData(endpoint: string, options?: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}`, options).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: any) {
    // Handle the error as needed (e.g., logging, user notification, etc.)
    console.error('An error occurred:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}
