import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature19Component } from './feature19.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature19Component],
  exports: [Feature19Component],
})
export class Domain9FeatureFeature19Module {}
