import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SodaDetailPage } from './soda-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SodaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SodaDetailPageRoutingModule {}


