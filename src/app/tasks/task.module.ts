import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [TaskItemComponent, TasksComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TasksComponent,
    TaskItemComponent
  ]
})

export class TaskModule {}
