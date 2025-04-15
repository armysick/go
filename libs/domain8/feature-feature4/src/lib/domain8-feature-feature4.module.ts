import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature4Component } from './feature4.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature4Component],
  exports: [Feature4Component],
})
export class Domain8FeatureFeature4Module {}
