import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature18Component } from './feature18.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature18Component],
  exports: [Feature18Component],
})
export class Domain4FeatureFeature18Module {}
