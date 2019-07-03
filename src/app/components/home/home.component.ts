import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = true;
  todos: Todo[] = [];

  timeStamp: number = 1561974670;
  timeStampOpt: string = JSON.stringify({
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    timezone: 'Europe/Kiev',
    hour: 'numeric',
    hour12: false,
    minute: 'numeric'
  });

  testPipeArr = [
      1,
      3,
      42,
      12,
      31
  ];

  testDirectiveStyle = true;

  viewConsole = console;

  constructor(
      private toastr: ToastrService,
      public todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data;
    });
  }

  onDelete(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe((data: Object) => {
      this.toastr.success('Todo was deleted successfully!', 'Message');
      this.todos = this.todos.filter((item: Todo) => item.id != todo.id);
    });
  }

}
