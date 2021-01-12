import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '@material/material.module';

import { ProductFormComponent } from '@admin/components/product-form/product-form.component';
import { NavComponent } from '@admin/components/nav/nav.component';
import { TableComponent } from '@admin/components/table/table.component';
import { DashboardComponent } from '@admin/components/dashboard/dashboard.component';
import { ProductsListComponent } from '@admin/components/products-list/products-list.component';
import { FormProductComponent } from '@admin/components/form-product/form-product.component';
import { ProductEditComponent } from '@admin/components/product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    ProductsListComponent,
    FormProductComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdminModule {}
