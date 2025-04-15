import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain2FeatureFeature1Module {}
