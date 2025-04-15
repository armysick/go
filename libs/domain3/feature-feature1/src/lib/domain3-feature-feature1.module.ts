import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain3FeatureFeature1Module {}
