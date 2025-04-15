import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature19Component } from './feature19.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature19Component],
  exports: [Feature19Component],
})
export class Domain1FeatureFeature19Module {}
