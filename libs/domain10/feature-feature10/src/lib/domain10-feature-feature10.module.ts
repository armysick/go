import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain10FeatureFeature10Module {}
