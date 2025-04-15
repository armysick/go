import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain5FeatureFeature16Module {}
