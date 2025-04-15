import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain10FeatureFeature7Module {}
