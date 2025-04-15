import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain9FeatureFeature3Module {}
