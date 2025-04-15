import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain6FeatureFeature9Module {}
