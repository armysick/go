import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain5FeatureFeature18Module {}
