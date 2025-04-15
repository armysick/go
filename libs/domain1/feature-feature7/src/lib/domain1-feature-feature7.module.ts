import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain1FeatureFeature7Module {}
