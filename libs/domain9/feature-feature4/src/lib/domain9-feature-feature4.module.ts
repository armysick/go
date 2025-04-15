import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature4Component } from './feature4.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature4Component],
  exports: [Feature4Component],
})
export class Domain9FeatureFeature4Module {}
