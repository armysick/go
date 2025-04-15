import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain9FeatureFeature11Module {}
