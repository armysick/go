import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain10FeatureFeature15Module {}
