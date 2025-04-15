import { Component, OnInit } from '@angular/core';
import { Feature3Facade } from '@demo/domain3/domain';

@Component({
  selector: 'domain3-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.scss'],
})
export class Feature3Component implements OnInit {
  entity3List$ = this.feature3Facade.entity3List$;

  constructor(private feature3Facade: Feature3Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature3Facade.load();
  }
}
