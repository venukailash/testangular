import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.todo = new Todo(this.id, 'Loading...', false, new Date());
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.todoService.retrieveTodo('venukailash', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoService.createTodo('venukailash', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    } else {
      this.todoService.updateTodo('venukailash', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
  }
}
