import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature17Component } from './feature17.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature17Component],
  exports: [Feature17Component],
})
export class Domain7FeatureFeature17Module {}
