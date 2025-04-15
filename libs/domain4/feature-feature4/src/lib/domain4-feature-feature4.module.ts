import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature4Component } from './feature4.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature4Component],
  exports: [Feature4Component],
})
export class Domain4FeatureFeature4Module {}
