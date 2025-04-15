import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain2FeatureFeature7Module {}
