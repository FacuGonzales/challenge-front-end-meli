import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableItemsComponent } from './table-items/table-items.component';

         

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NavBarComponent,
    TableItemsComponent,
  ],
  providers: [],
  exports: [
    NavBarComponent,
    TableItemsComponent
  ]
})

export class SharedComponentsModule { }
