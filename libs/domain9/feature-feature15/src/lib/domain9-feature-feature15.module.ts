import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain9FeatureFeature15Module {}
