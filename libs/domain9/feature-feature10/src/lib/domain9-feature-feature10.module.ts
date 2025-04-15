import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain9FeatureFeature10Module {}
