import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain8FeatureFeature1Module {}
