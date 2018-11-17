import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';

import { ToolbarComponent } from '../toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    ToolbarComponent
  ]
})

export class CoreModule {}
