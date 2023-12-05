import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskItemService } from 'src/app/services/task-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private employeeService: EmployeeService, private taskItemService: TaskItemService) {}

  searchText: string = '';

  employeeTasksCount?: number;

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

  ngOnInit() {
    this.getEmployees();

    // employees.forEach(employee => {
    //   this.employeeTasksCount = this.getTasksCountForEmployee(employee);
    // }); 
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

    getEmployeeTasksCount(employeeId: any): number {
      let tasksCount = 5;
      console.log("hi")
      // this.taskItemService.getEmployeeTasksCount(employeeId)
      // .subscribe(count => {
      //   console.log("in ts file")
      //     tasksCount = count
      //   }
      //     ,
      //   error => console.error('Error fetching tasks count', error)
      // );
      return tasksCount;
    }
  }