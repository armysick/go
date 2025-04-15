import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain2FeatureFeature12Module {}
