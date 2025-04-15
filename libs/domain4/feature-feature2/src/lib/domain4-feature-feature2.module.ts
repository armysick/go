import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature2Component } from './feature2.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature2Component],
  exports: [Feature2Component],
})
export class Domain4FeatureFeature2Module {}
