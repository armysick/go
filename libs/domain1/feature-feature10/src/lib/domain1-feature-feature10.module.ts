import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain1FeatureFeature10Module {}
