import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain1FeatureFeature9Module {}
