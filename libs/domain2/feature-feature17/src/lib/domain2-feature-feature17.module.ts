import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature17Component } from './feature17.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature17Component],
  exports: [Feature17Component],
})
export class Domain2FeatureFeature17Module {}
