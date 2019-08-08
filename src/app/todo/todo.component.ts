import { Component, OnInit } from '@angular/core';
// import { NgForms } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    {
      task: "get milk",
      completed: true
    },
    {
      task: "water plants",
      completed: true
    },
    {
      task: "check email",
      completed: false
    },
    {
      task: "do laundry",
      completed: false
    },
    {
      task: "buy peoplemover pass",
      completed: false
    },
    {
      task: "get cash",
      completed: true
    },
    {
      task: "exercise",
      completed: true
    }
  ]

  constructor() { }

  addTask(data: any): void {
    this.todoList.push(data.form.value.newtask);

  }

  removeTask(index: number): void {
    this.todoList.splice(index, 1);
  }


  ngOnInit() {
  }

}
