import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature19Component } from './feature19.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature19Component],
  exports: [Feature19Component],
})
export class Domain5FeatureFeature19Module {}
