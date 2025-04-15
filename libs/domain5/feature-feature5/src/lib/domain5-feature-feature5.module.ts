import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature5Component } from './feature5.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature5Component],
  exports: [Feature5Component],
})
export class Domain5FeatureFeature5Module {}
