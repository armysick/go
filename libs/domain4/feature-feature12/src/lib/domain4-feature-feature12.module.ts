import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature12Component } from './feature12.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature12Component],
  exports: [Feature12Component],
})
export class Domain4FeatureFeature12Module {}
