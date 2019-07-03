import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoId: string;
  formData: Todo = {
    title: '',
    completed: false,
    userId: 0,
    id: 0
  };

  constructor(
      private toastr: ToastrService,
      public todoService: TodoService,
      public activatedRoute: ActivatedRoute,
      public router: Router
  ) { }

  ngOnInit() {
    this.todoId = this.activatedRoute.snapshot.params['id'];

    if (this.todoId) {
      this.todoService.getTodo(this.todoId).subscribe((todo: Todo) => {
        this.formData = Object.assign({}, todo);
      });
    }
  }

  onAdd(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe((resp: Todo) => {
      this.toastr.success('Todo was added successfully!', 'Message');
      this.router.navigate(['/']);
    }, error => this.toastr.error(error.message, 'Error'));
  }

  onEdit(todo: Todo): void {
    this.todoService.editTodo(todo).subscribe((todo: Todo) => {
      this.toastr.success('Todo was edited successfully!', 'Message');
      this.router.navigate(['/']);
    }, error => this.toastr.error(error.message, 'Error'));
  }

}
