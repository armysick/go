import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain7FeatureFeature7Module {}
