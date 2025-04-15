import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature8Component } from './feature8.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature8Component],
  exports: [Feature8Component],
})
export class Domain4FeatureFeature8Module {}
