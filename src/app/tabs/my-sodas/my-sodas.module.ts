import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySodasPageRoutingModule } from './my-sodas-routing.module';

import { MySodasPage } from './my-sodas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySodasPageRoutingModule
  ],
  declarations: [MySodasPage]
})
export class MySodasPageModule {}
