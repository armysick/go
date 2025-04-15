import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain8FeatureFeature11Module {}
