import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature17Component } from './feature17.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature17Component],
  exports: [Feature17Component],
})
export class Domain3FeatureFeature17Module {}
