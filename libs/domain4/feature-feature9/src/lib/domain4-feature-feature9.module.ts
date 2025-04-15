import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature9Component } from './feature9.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature9Component],
  exports: [Feature9Component],
})
export class Domain4FeatureFeature9Module {}
