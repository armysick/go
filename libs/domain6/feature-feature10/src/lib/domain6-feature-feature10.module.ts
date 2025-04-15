import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain6FeatureFeature10Module {}
