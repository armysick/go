import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain9FeatureFeature8Module {}
