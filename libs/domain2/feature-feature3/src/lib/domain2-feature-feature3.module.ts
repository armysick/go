import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain2FeatureFeature3Module {}
