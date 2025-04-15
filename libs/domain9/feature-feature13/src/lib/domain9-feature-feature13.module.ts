import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain9FeatureFeature13Module {}
