import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain6FeatureFeature16Module {}
