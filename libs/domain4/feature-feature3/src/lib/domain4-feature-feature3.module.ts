import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain4FeatureFeature3Module {}
