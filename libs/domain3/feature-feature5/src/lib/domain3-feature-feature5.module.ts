import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature5Component } from './feature5.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature5Component],
  exports: [Feature5Component],
})
export class Domain3FeatureFeature5Module {}
