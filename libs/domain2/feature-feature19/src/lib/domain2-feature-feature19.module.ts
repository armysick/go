import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature19Component } from './feature19.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature19Component],
  exports: [Feature19Component],
})
export class Domain2FeatureFeature19Module {}
