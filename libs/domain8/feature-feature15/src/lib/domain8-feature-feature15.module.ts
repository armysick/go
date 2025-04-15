import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain8FeatureFeature15Module {}
