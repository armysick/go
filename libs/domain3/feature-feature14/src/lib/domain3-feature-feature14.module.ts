import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature14Component } from './feature14.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature14Component],
  exports: [Feature14Component],
})
export class Domain3FeatureFeature14Module {}
