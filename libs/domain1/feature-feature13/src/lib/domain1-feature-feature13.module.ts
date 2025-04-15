import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain1FeatureFeature13Module {}
