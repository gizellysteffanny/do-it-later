import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { Task } from './task.model';
import { TaskService } from './task.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks$: Observable<Task[]>;
  selectedTask: Task;

  constructor(private service: TaskService, private dialog: MatDialog) { }

  ngOnInit() {
    this.tasks$ = this.service.tasks.valueChanges();
  }

  onPeformTask(event) {
    console.log(event);
  }

  showDialog() {
    this.dialog.open(DialogComponent);
  }

}
