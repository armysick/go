import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain1FeatureFeature15Module {}
