import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain6FeatureFeature8Module {}
