import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain7FeatureFeature8Module {}
