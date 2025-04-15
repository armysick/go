import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain5FeatureFeature12Module {}
