import { NgModule } from '@angular/core';

import { MatLineModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatSlideToggleModule
  ],
  exports: [
    MatLineModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule
  ]
})

export class MaterialModule {}
