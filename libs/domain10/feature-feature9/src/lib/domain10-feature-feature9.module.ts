import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain10FeatureFeature9Module {}
