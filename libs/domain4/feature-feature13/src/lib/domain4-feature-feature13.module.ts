import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature13Component } from './feature13.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature13Component],
  exports: [Feature13Component],
})
export class Domain4FeatureFeature13Module {}
