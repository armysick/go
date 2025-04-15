import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain6DomainModule } from '@demo/domain6/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain6DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain6FeatureFeature6Module {}
