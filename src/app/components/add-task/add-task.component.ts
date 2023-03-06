import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "src/app/Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;


  constructor(){}

  ngOnInit(): void {}

  onSubmit() {
    //Semplice Validator
    if (!this.text) {
      alert("Compila tutti i campi!");
      return;
    }

    // Creo Oggetto con Dati
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // Invio evento al componente padre
    this.onAddTask.emit(newTask);

    // Reset Dati
    this.text = "";
    this.day = "";
    this.reminder = false;
  }

}
