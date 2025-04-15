import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain6FeatureFeature1Module {}
