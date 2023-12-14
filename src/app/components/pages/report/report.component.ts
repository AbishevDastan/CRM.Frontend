import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee';
import { TaskItem } from 'src/app/models/task-item';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskItemService } from 'src/app/services/task-item.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],

//   template: `
//   <h2>Просроченные задачи</h2>
//   <ul>
//     <li *ngFor="let task of overdueTaskItems">
//       {{ task.title }} - {{ task.description }} - {{ task.deadline | date }} - {{ task.completionPercentage }}%
//     </li>
//   </ul>
//   <button (click)="printReport()">Печать</button>
// `,
})
export class ReportComponent {

  overdueTaskItems?: TaskItem[];
  overdueTaskItem?: TaskItem;
  employee?: Employee;
  utcDate?: string | null;

  constructor(private taskItemService: TaskItemService, private employeeService: EmployeeService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.taskItemService.getOverdueTaskItems()
    .subscribe((tasks) => {
      this.overdueTaskItems = tasks;
    });

    this.overdueTaskItems?.forEach(overdueTaskItem => {
      this.getEmployee(overdueTaskItem.employeeId);
    });

    this.utcDate = this.getCurrentUtcDate();
  }

  getCurrentUtcDate(): string | null {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
    return formattedDate;
  }

  getEmployee(employeeId?: number) {
    this.employeeService.getEmployee(employeeId).subscribe((data) => {
      console.log(data);
      this.employee = data;
    });
    };

  printReport() {
    window.print();  
  }
}
