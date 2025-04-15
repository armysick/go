import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain3FeatureFeature10Module {}
