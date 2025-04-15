import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain8DomainModule } from '@demo/domain8/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain8DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain8FeatureFeature6Module {}
