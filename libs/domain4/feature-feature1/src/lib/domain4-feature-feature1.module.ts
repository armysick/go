import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature1Component } from './feature1.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature1Component],
  exports: [Feature1Component],
})
export class Domain4FeatureFeature1Module {}
