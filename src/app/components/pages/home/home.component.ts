import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private employeeService: EmployeeService) {}

  employees: Array<Employee> = [];
  addEmployee: Employee = {
    fullName: "",
    position: ""
  };
  updateEmployee: Employee = {
    id: 0,
    fullName: "",
    position: ""
  };

  updatedEmployeeId?: number;
  updatedEmployeeName: string = "";
  updatedEmployeePosition:string = "";

  selectedEmployeeId?: number;

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
    console.log(data);
    this.employees = data;
  });
  }

  onAddEmployeeSubmit() {
    this.employeeService.addEmployee(this.addEmployee).subscribe(
      (data) => {
        console.log('Employee added successfully:', data);
        this.getEmployees();
        this.addEmployee = data;
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }

  passEmployeeToUpdate(employee: Employee ){
    this.updatedEmployeeId = employee.id;
    this.updatedEmployeeName = employee.fullName;
    this.updatedEmployeePosition = employee.position;
  }

  onUpdateEmployeeSubmit() {
    this.updateEmployee = {
        id: this.updatedEmployeeId,
        fullName: this.updatedEmployeeName,
        position: this.updatedEmployeePosition
    }
    this.employeeService.updateEmployee(this.updateEmployee).subscribe(
      (data) => {
        console.log('Employee updated successfully:', data);
        this.updateEmployee = { id: data.id, fullName: data.fullName, position: data.position };
        this.getEmployees();
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }

  passEmployeeIdToDelete(employeeId?: number ){
    this.selectedEmployeeId = employeeId;
  }

  deleteEmployee(employeeId?: number) {
      this.employeeService.deleteEmployee(this.selectedEmployeeId).subscribe(
        () => {
          console.log('Employee deleted successfully.');
          this.getEmployees(); 
        },
        (error) => {
          console.error('Error deleting employee:', error);
        }
      );
    }
  }