import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { Todo } from "../models/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = environment.api_url;

  // private editTask: BehaviorSubject<Todo> = new BehaviorSubject({ title: '', userId: 1, completed: false });
  // public editTaskEvent = this.editTask.asObservable();

  constructor(
      private http: HttpClient
  ) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${ this.apiUrl }/todos`);
  }

  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/todos/${id}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/todos`, todo);
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/todos/${todo.id}`, todo);
  }

  deleteTodo(todo): Observable<Todo> {
    return this.http.delete<Todo>(`${ this.apiUrl }/todos/${ todo.id }`)
  }

  // emitEditEvent(todo: Todo): void {
  //   this.editTask.next(todo);
  // }
}
