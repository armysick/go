import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain6FeatureFeature2Module {}
