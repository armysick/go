import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain3FeatureFeature9Module {}
