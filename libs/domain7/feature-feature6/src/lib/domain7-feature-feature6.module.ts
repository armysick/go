import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain7DomainModule } from '@demo/domain7/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain7DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain7FeatureFeature6Module {}
