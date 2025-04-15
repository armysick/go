import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain6FeatureFeature11Module {}
