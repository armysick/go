import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain1FeatureFeature3Module {}
