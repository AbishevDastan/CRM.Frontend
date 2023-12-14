import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TaskItem } from '../models/task-item';

@Injectable({
  providedIn: 'root'
})
export class TaskItemService {

  private url = "TaskItem";

  constructor(private http: HttpClient) { }

  getTaskItems () : Observable<Array<TaskItem>> {
    return this.http.get<Array<TaskItem>>(`${environment.apiUrl}/${this.url}/task-items`);
  }

  getTaskItemsByEmployeeId () : Observable<Array<TaskItem>> {
    return this.http.get<Array<TaskItem>>(`${environment.apiUrl}/${this.url}/task-items-by-employee-id`);
  }

  getEmployeeTasksCount(employeeId?: number) : Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/${this.url}/${employeeId}/count`);
  }

  getOverdueTaskItems() : Observable<Array<TaskItem>> {
    return this.http.get<Array<TaskItem>>(`${environment.apiUrl}/${this.url}/overdue-task-items`);
  }

  getTaskItem () : Observable<TaskItem> {
    return this.http.get<TaskItem>(`${environment.apiUrl}/${this.url}`);
  }

  addTaskItem(taskItem: TaskItem): Observable<TaskItem> {
    return this.http.post<TaskItem>(`${environment.apiUrl}/${this.url}`, taskItem);
  }

  updateTaskItem(taskItem: TaskItem): Observable<TaskItem> {
    return this.http.put<TaskItem>(`${environment.apiUrl}/${this.url}`, taskItem);
  }

  deleteTaskItem(taskItemId?: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${this.url}/${taskItemId}`);
  }}
