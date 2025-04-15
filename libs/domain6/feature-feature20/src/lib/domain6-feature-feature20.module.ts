import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain6FeatureFeature20Module {}
