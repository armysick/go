import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain6FeatureFeature12Module {}
