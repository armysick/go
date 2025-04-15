import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain3FeatureFeature2Module {}
