import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskItemService } from 'src/app/services/task-item.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(private taskItemService: TaskItemService,
    private router: Router) { }

  @Input() taskItem?: {
    id: number; 
    title: string; 
    description: string; 
    startDate: Date;
    deadLine: Date;
    completionPercentage: number;
    employeeId: number; 
  };

  ngOnInit() {
    this.getTaskItem();
  }

  getTaskItem() {
    this.taskItemService.getTaskItem(this.taskItem?.id).subscribe((data) => {
      console.log(data);
      this.taskItem = data;
    })
  }

  // goToEmployeeTasks() {
  //   this.router.navigate(['']); // Need to finish!
  // }

  // onUpdateEmployeeSubmit(): void {
  //   if (this.employee) {
  //     const updateEmployeeDto: UpdateEmployeeDto = {
  //       fullName: this.employee.fullName,
  //       position: this.employee.position
  //     };

  //     this.employeeService.updateEmployee(updateEmployeeDto, this.employee.id)
  //       .subscribe(
  //         updatedEmployee => {
  //           console.log('Employee updated successfully:', updatedEmployee);
  //           this.employee = updatedEmployee;
  //         },
  //         error => {
  //           console.error('Error updating employee:', error);
  //         }
  //       );
  //   }
  // }

  // deleteEmployee() {
  //   this.employeeService.deleteEmployee(this.employee?.id).subscribe(
  //     () => {
  //       console.log('Employee deleted successfully.');
  //     },
  //     (error) => {
  //       console.error('Error deleting employee:', error);
  //     }
  //   );
  // }

}
