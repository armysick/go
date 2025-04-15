import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain7FeatureFeature3Module {}
