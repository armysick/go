import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain7FeatureFeature10Module {}
