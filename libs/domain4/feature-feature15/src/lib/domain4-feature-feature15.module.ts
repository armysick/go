import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature15Component } from './feature15.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature15Component],
  exports: [Feature15Component],
})
export class Domain4FeatureFeature15Module {}
