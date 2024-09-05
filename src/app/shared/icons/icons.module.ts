import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InIconComponent } from './icon.component';
import { Icons, ICONS } from './icons';

@NgModule({
  declarations: [
    InIconComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ICONS, useValue: Icons },
  ],
  exports: [
    InIconComponent
  ]
})
export class IconsModule { }
