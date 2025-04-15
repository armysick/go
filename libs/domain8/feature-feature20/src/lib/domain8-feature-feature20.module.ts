import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain8FeatureFeature20Module {}
