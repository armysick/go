import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature17Component } from './feature17.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature17Component],
  exports: [Feature17Component],
})
export class Domain9FeatureFeature17Module {}
