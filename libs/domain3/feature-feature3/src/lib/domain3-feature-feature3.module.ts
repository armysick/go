import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain3FeatureFeature3Module {}
