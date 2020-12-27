import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregablesPageRoutingModule } from './entregables-routing.module';

import { EntregablesPage } from './entregables.page';
import { MaterialModule } from '../material.module';
import { TableEntregableComponent } from '../table-entregable/table-entregable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    EntregablesPageRoutingModule
  ],
  declarations: [EntregablesPage,TableEntregableComponent]
})
export class EntregablesPageModule {}
