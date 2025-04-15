import { Component, OnInit } from '@angular/core';
import { Feature20Facade } from '@demo/domain7/domain';

@Component({
  selector: 'domain7-feature20',
  templateUrl: './feature20.component.html',
  styleUrls: ['./feature20.component.scss'],
})
export class Feature20Component implements OnInit {
  entity20List$ = this.feature20Facade.entity20List$;

  constructor(private feature20Facade: Feature20Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature20Facade.load();
  }
}
