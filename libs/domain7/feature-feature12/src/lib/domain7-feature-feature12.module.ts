import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain7FeatureFeature12Module {}
