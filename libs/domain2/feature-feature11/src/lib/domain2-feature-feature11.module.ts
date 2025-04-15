import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain2FeatureFeature11Module {}
