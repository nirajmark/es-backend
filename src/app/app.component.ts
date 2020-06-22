import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createdTodo = '';
  todoList = []

  saveTodo() {
    console.log('Inside Save todo.')
    this.todoList.push(this.createdTodo)
    this.createdTodo = ''
  }
}
