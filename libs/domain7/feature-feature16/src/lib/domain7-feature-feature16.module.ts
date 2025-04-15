import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain7FeatureFeature16Module {}
