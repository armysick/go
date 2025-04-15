import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain3FeatureFeature8Module {}
