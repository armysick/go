import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain7FeatureFeature18Module {}
