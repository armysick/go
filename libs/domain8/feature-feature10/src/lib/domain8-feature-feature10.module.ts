import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain8FeatureFeature10Module {}
