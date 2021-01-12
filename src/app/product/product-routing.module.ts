import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from '@product/components/product-detail/product-detail.component';
import { ProductsContainer } from '@product/containers/products/products.container';

const routes: Routes = [
  {
    path: '',
    component: ProductsContainer,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
