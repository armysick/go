import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature5Component } from './feature5.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature5Component],
  exports: [Feature5Component],
})
export class Domain10FeatureFeature5Module {}
