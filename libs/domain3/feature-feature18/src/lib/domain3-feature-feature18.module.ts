import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain3FeatureFeature18Module {}
