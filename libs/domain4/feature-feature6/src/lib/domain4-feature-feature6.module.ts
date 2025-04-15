import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain4DomainModule } from '@demo/domain4/domain';
import { Feature6Component } from './feature6.component';

@NgModule({
  imports: [CommonModule, Domain4DomainModule],
  declarations: [Feature6Component],
  exports: [Feature6Component],
})
export class Domain4FeatureFeature6Module {}
