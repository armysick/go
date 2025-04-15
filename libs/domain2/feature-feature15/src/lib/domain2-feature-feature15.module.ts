import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain2FeatureFeature15Module {}
