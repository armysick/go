import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain2FeatureFeature2Module {}
