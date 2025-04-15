import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain10FeatureFeature2Module {}
