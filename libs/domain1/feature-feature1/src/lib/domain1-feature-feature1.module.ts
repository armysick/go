import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain1FeatureFeature1Module {}
