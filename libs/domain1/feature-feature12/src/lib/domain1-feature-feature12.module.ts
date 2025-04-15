import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain1FeatureFeature12Module {}
