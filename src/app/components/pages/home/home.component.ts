import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeDto } from 'src/app/models/employee/add-employee-dto';
import { Employee } from 'src/app/models/employee/employee';
import { AdminService } from 'src/app/services/admin.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private employeeService: EmployeeService,
    private adminService: AdminService,
    private router: Router) {}

  searchText: string = '';

  employees?: Array<Employee>;

  addEmployee: AddEmployeeDto = {
    fullName: "",
    position: ""
  };

  ngOnInit() {
    if (!this.isAuthenticated)
    {
      this.router.navigate(['/login']).then();
    }

    this.getEmployees();
    }

    get isAuthenticated() {
      return this.adminService.isAuthenticated();
    }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
    console.log(data);
    this.employees = data;
  });
  }

  addEmployeeOnSubmit() {
    this.employeeService.addEmployee(this.addEmployee).subscribe(
      (data) => {
        console.log('Employee added successfully:', data);
        this.getEmployees();
        this.addEmployee = data;
      },
      (error) => {
        console.error('Error adding employee:', error);
      });
  }

    searchEmployees() {
      if (this.searchText) {
        this.employeeService.searchEmployees(this.searchText)
          .subscribe((result: Employee[]) => {
            this.employees = result;
          });
      } else {
        this.getEmployees();
      }
    }
  }