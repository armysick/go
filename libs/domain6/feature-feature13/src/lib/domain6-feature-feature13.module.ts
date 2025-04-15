import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain6FeatureFeature13Module {}
