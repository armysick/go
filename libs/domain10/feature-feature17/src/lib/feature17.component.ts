import { Component, OnInit } from '@angular/core';
import { Feature17Facade } from '@demo/domain10/domain';

@Component({
  selector: 'domain10-feature17',
  templateUrl: './feature17.component.html',
  styleUrls: ['./feature17.component.scss'],
})
export class Feature17Component implements OnInit {
  entity17List$ = this.feature17Facade.entity17List$;

  constructor(private feature17Facade: Feature17Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature17Facade.load();
  }
}
