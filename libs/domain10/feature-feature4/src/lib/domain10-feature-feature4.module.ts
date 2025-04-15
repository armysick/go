import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature4Component } from './feature4.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature4Component],
  exports: [Feature4Component],
})
export class Domain10FeatureFeature4Module {}
