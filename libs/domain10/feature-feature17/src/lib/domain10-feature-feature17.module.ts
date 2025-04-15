import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature17Component } from './feature17.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature17Component],
  exports: [Feature17Component],
})
export class Domain10FeatureFeature17Module {}
