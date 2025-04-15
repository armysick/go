import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature14Component } from './feature14.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature14Component],
  exports: [Feature14Component],
})
export class Domain1FeatureFeature14Module {}
