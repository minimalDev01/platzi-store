import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from '@home/components/banner/banner.component';
import { HomeComponent } from '@home/components/home/home.component';

import { HomeRoutingModule } from '@home/home-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
