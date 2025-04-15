import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain2DomainModule } from '@demo/domain2/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain2DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain2FeatureFeature6Module {}
