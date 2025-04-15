import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain1FeatureFeature20Module {}
