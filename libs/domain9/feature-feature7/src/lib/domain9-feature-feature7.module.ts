import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain9FeatureFeature7Module {}
