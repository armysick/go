import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain8FeatureFeature7Module {}
