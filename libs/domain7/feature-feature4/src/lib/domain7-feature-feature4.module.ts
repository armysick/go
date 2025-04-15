import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature4Component } from './feature4.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature4Component],
  exports: [Feature4Component],
})
export class Domain7FeatureFeature4Module {}
