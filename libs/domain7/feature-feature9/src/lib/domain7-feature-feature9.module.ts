import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain7FeatureFeature9Module {}
