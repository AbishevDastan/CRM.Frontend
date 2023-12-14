import { Component, Input } from '@angular/core';
import { UpdateEmployeeDto } from 'src/app/models/employee/update-employee-dto';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private employeeService: EmployeeService) { }

  @Input() employee?: { id: number; fullName: string; position: string; };

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getEmployee(this.employee?.id).subscribe((data) => {
      console.log(data);
      this.employee = data;
    })
  }

  onUpdateEmployeeSubmit(): void {
    if (this.employee) {
      const updateEmployeeDto: UpdateEmployeeDto = {
        fullName: this.employee.fullName,
        position: this.employee.position
      };

      this.employeeService.updateEmployee(updateEmployeeDto, this.employee.id)
        .subscribe(
          updatedEmployee => {
            console.log('Employee updated successfully:', updatedEmployee);
            this.employee = updatedEmployee;
          },
          error => {
            console.error('Error updating employee:', error);
          }
        );
    }
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee?.id).subscribe(
      () => {
        console.log('Employee deleted successfully.');
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }
}