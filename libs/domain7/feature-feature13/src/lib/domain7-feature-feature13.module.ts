import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain7FeatureFeature13Module {}
