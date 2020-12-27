import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregablesPage } from './entregables.page';

const routes: Routes = [
  {
    path: '',
    component: EntregablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregablesPageRoutingModule {}
