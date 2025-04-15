import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain2FeatureFeature13Module {}
