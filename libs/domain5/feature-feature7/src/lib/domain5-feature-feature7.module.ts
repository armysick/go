import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain5FeatureFeature7Module {}
