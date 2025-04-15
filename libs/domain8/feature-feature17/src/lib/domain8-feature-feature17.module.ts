import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature17Component } from './feature17.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature17Component],
  exports: [Feature17Component],
})
export class Domain8FeatureFeature17Module {}
