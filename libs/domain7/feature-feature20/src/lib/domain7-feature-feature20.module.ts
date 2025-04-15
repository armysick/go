import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain7FeatureFeature20Module {}
