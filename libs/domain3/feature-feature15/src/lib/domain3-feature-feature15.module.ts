import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain3FeatureFeature15Module {}
