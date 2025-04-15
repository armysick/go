import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain7FeatureFeature11Module {}
