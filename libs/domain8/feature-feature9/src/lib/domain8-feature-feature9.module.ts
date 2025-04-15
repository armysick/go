import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain8FeatureFeature9Module {}
