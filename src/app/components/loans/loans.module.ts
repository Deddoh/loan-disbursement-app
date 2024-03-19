import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LoansRoutingModule } from './loans-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoansRoutingModule,
    SharedModule
  ]
})
export class LoansModule { }
