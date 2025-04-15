import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature5Component } from './feature5.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature5Component],
  exports: [Feature5Component],
})
export class Domain2FeatureFeature5Module {}
