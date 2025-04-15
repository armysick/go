import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature14Component } from './feature14.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature14Component],
  exports: [Feature14Component],
})
export class Domain10FeatureFeature14Module {}
