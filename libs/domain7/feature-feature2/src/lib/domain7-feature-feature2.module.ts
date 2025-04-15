import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain7FeatureFeature2Module {}
