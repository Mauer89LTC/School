import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySodasPage } from './my-sodas.page';

const routes: Routes = [
  {
    path: '',
    component: MySodasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySodasPageRoutingModule {}
