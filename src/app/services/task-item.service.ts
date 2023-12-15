import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TaskItem } from '../models/task-item/task-item';
import { AddTaskItem } from '../models/task-item/add-task-item';
import { UpdateTaskItem } from '../models/task-item/update-task-item';

@Injectable({
  providedIn: 'root'
})
export class TaskItemService {

  private url = "TaskItem";

  constructor(private http: HttpClient) { }

  getTaskItems () : Observable<Array<TaskItem>> {
    return this.http.get<Array<TaskItem>>(`${environment.apiUrl}/${this.url}/task-items`);
  }

  getTaskItemsByEmployeeId (employeeId?: number) : Observable<Array<TaskItem>> {
    return this.http.get<Array<TaskItem>>(`${environment.apiUrl}/${this.url}/${employeeId}/task-items-by-employee-id`);
  }

  getEmployeeTasksCount(employeeId?: number) : Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/${this.url}/${employeeId}/count`);
  }

  getOverdueTaskItems() : Observable<Array<TaskItem>> {
    return this.http.get<Array<TaskItem>>(`${environment.apiUrl}/${this.url}/overdue-task-items`);
  }

  getTaskItem (id?: number) : Observable<TaskItem> {
    return this.http.get<TaskItem>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  addTaskItem(addTaskItem: AddTaskItem): Observable<TaskItem> {
    return this.http.post<TaskItem>(`${environment.apiUrl}/${this.url}`, addTaskItem);
  }

  updateTaskItem(updateTaskItem: UpdateTaskItem, id: number): Observable<TaskItem> {
    return this.http.put<TaskItem>(`${environment.apiUrl}/${this.url}/${id}`, updateTaskItem);
  }

  deleteTaskItem(taskItemId?: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${this.url}/${taskItemId}`);
  }}
