import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee/employee';
import { environment } from 'src/environments/environment.development';
import { AddEmployeeDto } from '../models/employee/add-employee-dto';
import { UpdateEmployeeDto } from '../models/employee/update-employee-dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "Employee";

  constructor(private http: HttpClient) { }

  getEmployees () : Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(`${environment.apiUrl}/${this.url}/employees`);
  }

  getEmployee (employeeId?: number) : Observable<Employee> {
    return this.http.get<Employee>(`${environment.apiUrl}/${this.url}/${employeeId}`);
  }

  searchEmployees(searchText: string) : Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(`${environment.apiUrl}/${this.url}/${searchText}/search`);
  }

  addEmployee(addEmployeeDto: AddEmployeeDto): Observable<Employee> {
    return this.http.post<Employee>(`${environment.apiUrl}/${this.url}`, addEmployeeDto);
  }

  updateEmployee(updateEmployeeDto: UpdateEmployeeDto, id: number): Observable<Employee> {
    return this.http.put<Employee>(`${environment.apiUrl}/${this.url}/${id}`, updateEmployeeDto);
  }

  deleteEmployee(employeeId?: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${this.url}/${employeeId}`);
  }
}
