import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain7FeatureFeature15Module {}
