import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain5FeatureFeature15Module {}
