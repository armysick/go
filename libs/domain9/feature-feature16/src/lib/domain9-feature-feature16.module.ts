import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain9FeatureFeature16Module {}
