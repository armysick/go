import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature14Component } from './feature14.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature14Component],
  exports: [Feature14Component],
})
export class Domain7FeatureFeature14Module {}
