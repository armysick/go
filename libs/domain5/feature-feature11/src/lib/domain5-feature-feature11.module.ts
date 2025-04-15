import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain5FeatureFeature11Module {}
