import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain5FeatureFeature13Module {}
