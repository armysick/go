import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain1FeatureFeature16Module {}
