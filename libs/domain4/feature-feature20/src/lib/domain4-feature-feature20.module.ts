import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature20Component } from './feature20.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature20Component],
  exports: [Feature20Component],
})
export class Domain4FeatureFeature20Module {}
