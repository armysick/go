import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain6FeatureFeature7Module {}
