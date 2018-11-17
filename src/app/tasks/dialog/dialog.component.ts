import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialogTitle = 'Nova Tarefa';
  task: Task = {title: ''};

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private service: TaskService,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
    if (this.data) {
      this.dialogTitle = 'Editar Tarefa';
      this.task = this.data.task;
    }
  }

  save() {
    const operation: Promise<void> =
    (!this.data) ?
      this.service.create(this.task) :
      this.service.update(this.task);

    operation.then(() => {
      console.log('Tarefa salva com sucesso!');
      this.dialogRef.close();
    }).catch(error => console.log(error));
  }

}
