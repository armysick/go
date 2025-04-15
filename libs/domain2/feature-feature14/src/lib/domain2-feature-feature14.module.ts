import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature14Component } from './feature14.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature14Component],
  exports: [Feature14Component],
})
export class Domain2FeatureFeature14Module {}
