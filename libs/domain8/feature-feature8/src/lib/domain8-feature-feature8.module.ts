import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain8FeatureFeature8Module {}
