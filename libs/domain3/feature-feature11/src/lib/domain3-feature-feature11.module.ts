import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain3FeatureFeature11Module {}
