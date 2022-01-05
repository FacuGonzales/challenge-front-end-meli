import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [HomeComponent],
  providers: [],
})

export class HomeModule { }
