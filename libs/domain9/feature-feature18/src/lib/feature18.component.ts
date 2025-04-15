import { Component, OnInit } from '@angular/core';
import { Feature18Facade } from '@demo/domain9/domain';

@Component({
  selector: 'domain9-feature18',
  templateUrl: './feature18.component.html',
  styleUrls: ['./feature18.component.scss'],
})
export class Feature18Component implements OnInit {
  entity18List$ = this.feature18Facade.entity18List$;

  constructor(private feature18Facade: Feature18Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature18Facade.load();
  }
}
