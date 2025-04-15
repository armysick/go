import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain3FeatureFeature13Module {}
