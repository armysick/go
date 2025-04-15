import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature19Component } from './feature19.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature19Component],
  exports: [Feature19Component],
})
export class Domain8FeatureFeature19Module {}
