// import { Component, Input } from '@angular/core';
// import { Employee } from 'src/app/models/employee';
// import { TaskItem } from 'src/app/models/task-item';
// import { TaskService } from 'src/app/services/task-item.service';

// @Component({
//   selector: 'app-tasks',
//   templateUrl: './tasks.component.html',
//   styleUrls: ['./tasks.component.css']
// })
// export class TasksComponent {

//  // @Input() employee : Employee; -task component
//   constructor(private taskItemService: TaskService) {}

//   taskItems: Array<TaskItem> = [];

//   addTaskItem: TaskItem = {
//     title: "",
//     description: "",
//     startDate: Date,
//     deadLine: Date,
//     completionPercentage: number,
//     employeeId: number
//   };
//   updateTaskItem: TaskItem = {
//     id: 0,
//     title: "",
//     description: "",
//     startDate: Date,
//     deadLine: Date,
//     completionPercentage: number,
//     employeeId: number
//   };

//   updatedTaskItemId?: number;
//   updatedTaskItemTitle: string = "";

//   selectedTaskItemId?: number;

//   ngOnInit(): void {
//     this.getTaskItemsByEmployeeId();
//   }

//   getTaskItemsByEmployeeId(employeeId?: number) {
//     this.taskItemService.getTaskItemsByEmployeeId().subscribe((data) => {
//     console.log(data);
//     this.taskItems = data;
//   });
//   }

//   onAddEmployeeSubmit() {
//     this.taskItemService.addTaskItem(this.addTaskItem).subscribe(
//       (data) => {
//         console.log('Task added successfully:', data);
//         this.getTaskItemsByEmployeeId();
//         this.addTaskItem = data;
//       },
//       (error) => {
//         console.error('Error adding task:', error);
//       }
//     );
//   }

//   passTaskItemToUpdate(taskItem: TaskItem ){
//     this.updatedTaskItemId = taskItem.id;
//     this.updatedTaskItemTitle = taskItem.title;
//   }

//   onUpdateTaskItemSubmit() {
//     this.updateTaskItem = {
//         id: this.updatedTaskItemId,
//         title: this.updatedTaskItemTitle
//     }
//     this.taskItemService.updateTaskItem(this.updateTaskItem).subscribe(
//       (data) => {
//         console.log('Task updated successfully:', data);
//         this.updateTaskItem = { id: data.id, title: data.title };
//         this.getTaskItemsByEmployeeId();
//       },
//       (error) => {
//         console.error('Error updating task:', error);
//       }
//     );
//   }

//   passTaskItemIdToDelete(taskItemId?: number ){
//     this.selectedTaskItemId = taskItemId;
//   }

//   deleteTaskItem(taskItemId?: number) {
//       this.taskItemService.deleteTaskItem(this.selectedTaskItemId).subscribe(
//         () => {
//           console.log('Task deleted successfully.');
//           this.getTaskItemsByEmployeeId(); 
//         },
//         (error) => {
//           console.error('Error deleting task:', error);
//         }
//       );
//     }
//   }