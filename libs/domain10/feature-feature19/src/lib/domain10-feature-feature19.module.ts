import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature19Component } from './feature19.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature19Component],
  exports: [Feature19Component],
})
export class Domain10FeatureFeature19Module {}
