import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain5FeatureFeature1Module {}
