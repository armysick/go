import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain10FeatureFeature12Module {}
