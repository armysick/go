import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature4Component } from './feature4.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature4Component],
  exports: [Feature4Component],
})
export class Domain3FeatureFeature4Module {}
