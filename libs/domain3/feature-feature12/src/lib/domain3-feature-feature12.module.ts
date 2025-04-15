import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain3FeatureFeature12Module {}
