import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature19Component } from './feature19.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature19Component],
  exports: [Feature19Component],
})
export class Domain4FeatureFeature19Module {}
