import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//fetch API từ cơ sở dữ liệu DB Json
export class CrudService {
  
  serviceURL:string;
  //khởi tạo kết nối với đường dẫn Database DB Json
  constructor(private http:HttpClient) { 
    this.serviceURL = "http://localhost:3000/task"
  }

  // Create
  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.serviceURL,task);
  }

  // Read
  getAllTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.serviceURL);
  }

  // Update
  editTask(task:Task): Observable<Task>{
    return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  }

  //Delelte
  deleteTask(task:Task): Observable<Task>{
    return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  }
 
  
}
