import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain8FeatureFeature13Module {}
