import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain10FeatureFeature18Module {}
