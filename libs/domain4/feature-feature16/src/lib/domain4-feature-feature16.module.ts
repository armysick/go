import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature16Component } from './feature16.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature16Component],
  exports: [Feature16Component],
})
export class Domain4FeatureFeature16Module {}
