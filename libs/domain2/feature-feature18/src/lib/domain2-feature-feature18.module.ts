import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain2FeatureFeature18Module {}
