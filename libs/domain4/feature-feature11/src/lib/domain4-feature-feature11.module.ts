import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature11Component } from './feature11.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature11Component],
  exports: [Feature11Component],
})
export class Domain4FeatureFeature11Module {}
