import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { TaskModule } from '../tasks/task.module';

import { ToolbarComponent } from '../toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    MaterialModule,
    TaskModule
  ],
  exports: [
    ToolbarComponent,
    MaterialModule,
    TaskModule
  ]
})

export class CoreModule {}
