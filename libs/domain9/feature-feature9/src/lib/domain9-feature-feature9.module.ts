import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain9FeatureFeature9Module {}
