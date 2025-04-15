import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain5FeatureFeature8Module {}
