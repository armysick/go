import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain2FeatureFeature20Module {}
