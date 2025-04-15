import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature10Component } from './feature10.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature10Component],
  exports: [Feature10Component],
})
export class Domain4FeatureFeature10Module {}
