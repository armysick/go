import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain6FeatureFeature3Module {}
