import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain5FeatureFeature10Module {}
