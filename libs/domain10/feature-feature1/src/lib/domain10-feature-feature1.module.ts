import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain10FeatureFeature1Module {}
