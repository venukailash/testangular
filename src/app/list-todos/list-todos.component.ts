import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  //   todo = [
  //     new Todo(1,'Learn to Dance',false, new Date()),
  //     new Todo(2,'Become and expert in Angular',false, new Date()),
  //     new Todo(3,'Visit India',false, new Date())
  // ]
  todos: Todo[];
  message: String;
  constructor(
    private todoService: TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.retrievedata();
  }

  deleteTodo(id){
    console.log(`Delete ${id}`);
    this.todoService.deleteTodo('venukailash',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of ${id} is successful`;
        this.retrievedata();
      }
    )
  }

  updateTodo(id){
    console.log(`Update ${id}`);
    this.router.navigate(['todos',id]);
  }

  retrievedata(){
    this.todoService.retrieveAllTodos('venukailash').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
