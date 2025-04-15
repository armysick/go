import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain9FeatureFeature1Module {}
