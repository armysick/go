import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature19Component } from './feature19.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature19Component],
  exports: [Feature19Component],
})
export class Domain3FeatureFeature19Module {}
