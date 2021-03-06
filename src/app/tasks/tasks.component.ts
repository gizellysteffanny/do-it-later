import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators/take';

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
  loading = true;

  constructor(private service: TaskService, private dialog: MatDialog) { }

  ngOnInit() {
    this.tasks$ = this.service.tasks.valueChanges();

    this.tasks$
      .pipe(take(1))
      .subscribe(() => this.loading = false);
  }

  onPeformTask(task: Task) {
    task.done = !task.done;
    this.service.update(task)
      .then(() => console.log('Tarefa atualizada com sucesso!'))
      .catch(error => console.log(error));
  }

  delete() {
    const confirm = window.confirm('Deseja remover essa tarefa? ');
    if (confirm) {
      this.service.delete(this.selectedTask)
      .then(() => console.log('Tarefa removida com sucesso!'))
      .catch(error => console.log(error));
    }
  }

  showDialog(task?: Task) {
    const config: MatDialogConfig<any> = (task) ? {data: {task}} : null;
    this.dialog.open(DialogComponent, config);
  }

}
