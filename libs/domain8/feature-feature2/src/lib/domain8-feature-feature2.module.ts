import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain8FeatureFeature2Module {}
