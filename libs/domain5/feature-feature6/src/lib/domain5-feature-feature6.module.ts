import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain5DomainModule } from '@demo/domain5/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain5DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain5FeatureFeature6Module {}
