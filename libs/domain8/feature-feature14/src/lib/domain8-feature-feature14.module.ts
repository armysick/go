import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature14Component } from './feature14.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature14Component],
  exports: [Feature14Component],
})
export class Domain8FeatureFeature14Module {}
