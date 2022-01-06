import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemDetailRoutingModule } from './item-detail-routing.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { ItemDetailComponent } from './page/item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemDetailRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [ItemDetailComponent],
  providers: [],
})

export class ItemDetailModule { }
