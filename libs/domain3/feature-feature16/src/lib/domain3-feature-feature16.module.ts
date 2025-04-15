import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain3FeatureFeature16Module {}
