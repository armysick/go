import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature4Component } from './feature4.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature4Component],
  exports: [Feature4Component],
})
export class Domain5FeatureFeature4Module {}
