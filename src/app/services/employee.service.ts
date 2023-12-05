import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "Employee";

  constructor(private http: HttpClient) { }

  getEmployees () : Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(`${environment.apiUrl}/${this.url}/employees`);
  }

  getEmployee () : Observable<Employee> {
    return this.http.get<Employee>(`${environment.apiUrl}/${this.url}`);
  }

  searchEmployees(searchText: string) : Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(`${environment.apiUrl}/${this.url}/${searchText}/search`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${environment.apiUrl}/${this.url}`, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${environment.apiUrl}/${this.url}`, employee);
  }

  deleteEmployee(employeeId?: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${this.url}/${employeeId}`);
  }
}
