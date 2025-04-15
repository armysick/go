import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature14Component } from './feature14.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature14Component],
  exports: [Feature14Component],
})
export class Domain9FeatureFeature14Module {}
