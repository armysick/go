import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain9FeatureFeature2Module {}
