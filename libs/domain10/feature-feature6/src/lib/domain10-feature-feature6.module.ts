import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain10FeatureFeature6Module {}
