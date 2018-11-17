import { Component, OnInit } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [
    {uuid: '', title: 'Ir ao shopping', done: false}
  ];
  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  onPeformTask(event) {
    console.log(event);
  }

}
