import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain1FeatureFeature11Module {}
