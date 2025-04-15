import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain2FeatureFeature10Module {}
