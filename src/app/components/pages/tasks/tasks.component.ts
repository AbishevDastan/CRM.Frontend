import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee/employee';
import { TaskItem } from 'src/app/models/task-item/task-item';
import { TaskItemService } from 'src/app/services/task-item.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(private taskItemService: TaskItemService,
    private route: ActivatedRoute,
    ) {}

  searchText: string = '';

  taskItems?: Array<TaskItem>;
  employeeId?: number;

  // addTaskItem: AddTaskItemDto = {
  //   title: "",
  //   description: "",
  //   startDate,
  //   deadLine,
  //   completionPercentage,
  //   userId
  // };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = +params['employeeId'];
      this.getTaskItemsByEmployeeId();
    });
  }

  getTaskItemsByEmployeeId() {
    this.taskItemService.getTaskItemsByEmployeeId(this.employeeId).subscribe((data) => {
    console.log(data);
    this.taskItems = data;
  });
  }

  // onAddEmployeeSubmit() {
  //   this.taskItemService.addTaskItem(this.addTaskItem).subscribe(
  //     (data) => {
  //       console.log('Task added successfully:', data);
  //       this.getTaskItemsByEmployeeId();
  //       this.addTaskItem = data;
  //     },
  //     (error) => {
  //       console.error('Error adding task:', error);
  //     }
  //   );
  // }
  }