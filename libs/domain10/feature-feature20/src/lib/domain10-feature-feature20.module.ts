import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain10FeatureFeature20Module {}
