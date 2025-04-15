import { Component, OnInit } from '@angular/core';
import { Feature1Facade } from '@demo/domain7/domain';

@Component({
  selector: 'domain7-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss'],
})
export class Feature1Component implements OnInit {
  entity1List$ = this.feature1Facade.entity1List$;

  constructor(private feature1Facade: Feature1Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature1Facade.load();
  }
}
