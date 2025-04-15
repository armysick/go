import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain1DomainModule } from '@demo/domain1/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain1DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain1FeatureFeature6Module {}
