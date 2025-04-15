import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain5FeatureFeature9Module {}
