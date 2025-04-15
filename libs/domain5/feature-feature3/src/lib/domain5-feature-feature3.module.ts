import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain5FeatureFeature3Module {}
