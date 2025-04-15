import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature17Component } from './feature17.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature17Component],
  exports: [Feature17Component],
})
export class Domain4FeatureFeature17Module {}
