import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain2FeatureFeature8Module {}
