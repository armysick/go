import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature5Component } from './feature5.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature5Component],
  exports: [Feature5Component],
})
export class Domain9FeatureFeature5Module {}
