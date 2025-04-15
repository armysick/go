import { Component, OnInit } from '@angular/core';
import { Feature2Facade } from '@demo/domain7/domain';

@Component({
  selector: 'domain7-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss'],
})
export class Feature2Component implements OnInit {
  entity2List$ = this.feature2Facade.entity2List$;

  constructor(private feature2Facade: Feature2Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature2Facade.load();
  }
}
