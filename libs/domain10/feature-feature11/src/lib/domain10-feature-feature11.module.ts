import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain10FeatureFeature11Module {}
