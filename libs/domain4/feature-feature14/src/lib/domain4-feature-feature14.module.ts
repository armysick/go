import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature14Component } from './feature14.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature14Component],
  exports: [Feature14Component],
})
export class Domain4FeatureFeature14Module {}
