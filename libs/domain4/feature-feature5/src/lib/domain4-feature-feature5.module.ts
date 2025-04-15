import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature5Component } from './feature5.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature5Component],
  exports: [Feature5Component],
})
export class Domain4FeatureFeature5Module {}
