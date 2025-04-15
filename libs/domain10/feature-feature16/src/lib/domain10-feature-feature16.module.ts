import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain10FeatureFeature16Module {}
