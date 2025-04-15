import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain6FeatureFeature15Module {}
