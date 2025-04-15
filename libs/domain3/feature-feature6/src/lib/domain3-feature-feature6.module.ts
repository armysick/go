import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain3DomainModule } from '@demo/domain3/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain3DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain3FeatureFeature6Module {}
