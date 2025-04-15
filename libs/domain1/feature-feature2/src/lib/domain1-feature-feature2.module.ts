import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain1FeatureFeature2Module {}
