import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain1FeatureFeature18Module {}
