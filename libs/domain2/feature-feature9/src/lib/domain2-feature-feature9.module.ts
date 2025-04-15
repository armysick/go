import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain2FeatureFeature9Module {}
