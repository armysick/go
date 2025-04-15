import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain9FeatureFeature20Module {}
