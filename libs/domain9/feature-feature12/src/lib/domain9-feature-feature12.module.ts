import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain9FeatureFeature12Module {}
