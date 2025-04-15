import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature17Component } from './feature17.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature17Component],
  exports: [Feature17Component],
})
export class Domain6FeatureFeature17Module {}
