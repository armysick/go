import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature7Component } from './feature7.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature7Component],
  exports: [Feature7Component],
})
export class Domain4FeatureFeature7Module {}
