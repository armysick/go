import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain8FeatureFeature3Module {}
