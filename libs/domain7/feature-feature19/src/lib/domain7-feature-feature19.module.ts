import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature19Component } from './feature19.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature19Component],
  exports: [Feature19Component],
})
export class Domain7FeatureFeature19Module {}
