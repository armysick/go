import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain6FeatureFeature18Module {}
