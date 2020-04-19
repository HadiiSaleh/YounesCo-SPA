import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatCheckboxModule,
  MatSortModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { CustomersRoutes } from './customers.routing';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomersRoutes),
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ]
})
export class CustomersModule { }
