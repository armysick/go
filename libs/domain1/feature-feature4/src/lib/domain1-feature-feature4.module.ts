import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature4Component } from './feature4.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature4Component],
  exports: [Feature4Component],
})
export class Domain1FeatureFeature4Module {}
