import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain5FeatureFeature20Module {}
