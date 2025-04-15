import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain5FeatureFeature2Module {}
