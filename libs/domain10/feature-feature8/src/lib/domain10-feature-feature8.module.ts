import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain10FeatureFeature8Module {}
