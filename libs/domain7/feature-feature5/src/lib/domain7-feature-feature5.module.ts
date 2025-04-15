import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature5Component } from './feature5.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature5Component],
  exports: [Feature5Component],
})
export class Domain7FeatureFeature5Module {}
