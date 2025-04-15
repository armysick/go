import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain7FeatureFeature1Module {}
