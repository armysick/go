import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature5Component } from './feature5.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature5Component],
  exports: [Feature5Component],
})
export class Domain1FeatureFeature5Module {}
