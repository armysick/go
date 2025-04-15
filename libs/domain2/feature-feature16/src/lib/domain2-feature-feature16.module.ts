import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain2FeatureFeature16Module {}
