import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain9DomainModule } from '@demo/domain9/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain9DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain9FeatureFeature6Module {}
