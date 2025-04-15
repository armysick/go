import { Component, OnInit } from '@angular/core';
import { Feature9Facade } from '@demo/domain6/domain';

@Component({
  selector: 'domain6-feature9',
  templateUrl: './feature9.component.html',
  styleUrls: ['./feature9.component.scss'],
})
export class Feature9Component implements OnInit {
  entity9List$ = this.feature9Facade.entity9List$;

  constructor(private feature9Facade: Feature9Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature9Facade.load();
  }
}
