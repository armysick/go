import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain3FeatureFeature7Module {}
