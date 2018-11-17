import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksComponent } from './tasks.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    TaskItemComponent,
    TasksComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    TasksComponent,
    TaskItemComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent]
})

export class TaskModule {}
