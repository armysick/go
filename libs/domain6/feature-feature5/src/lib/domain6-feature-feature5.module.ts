import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature5Component } from './feature5.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature5Component],
  exports: [Feature5Component],
})
export class Domain6FeatureFeature5Module {}
