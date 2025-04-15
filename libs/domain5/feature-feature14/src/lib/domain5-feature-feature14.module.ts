import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature14Component } from './feature14.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature14Component],
  exports: [Feature14Component],
})
export class Domain5FeatureFeature14Module {}
