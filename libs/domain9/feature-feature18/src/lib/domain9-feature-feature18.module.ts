import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain9FeatureFeature18Module {}
