import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain10FeatureFeature13Module {}
