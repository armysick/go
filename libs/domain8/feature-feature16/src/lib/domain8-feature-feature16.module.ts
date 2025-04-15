import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain8FeatureFeature16Module {}
