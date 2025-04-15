import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature17Component } from './feature17.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature17Component],
  exports: [Feature17Component],
})
export class Domain1FeatureFeature17Module {}
