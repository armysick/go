import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain8FeatureFeature12Module {}
