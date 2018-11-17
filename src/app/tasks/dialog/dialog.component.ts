import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';

import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  task: Task = {title: ''};

  constructor(private service: TaskService,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
  }

  save() {
    this.service.create(this.task)
      .then(() => {
        console.log('Tarefa salva com sucesso!');
        this.dialogRef.close();
      }).catch(error => console.log(error));
  }

}
