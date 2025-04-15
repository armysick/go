import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain1FeatureFeature8Module {}
