import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain8FeatureFeature18Module {}
