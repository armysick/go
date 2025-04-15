import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain3FeatureFeature20Module {}
