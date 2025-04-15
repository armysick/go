import { Component, OnInit } from '@angular/core';
import { Feature15Facade } from '@demo/domain9/domain';

@Component({
  selector: 'domain9-feature15',
  templateUrl: './feature15.component.html',
  styleUrls: ['./feature15.component.scss'],
})
export class Feature15Component implements OnInit {
  entity15List$ = this.feature15Facade.entity15List$;

  constructor(private feature15Facade: Feature15Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature15Facade.load();
  }
}
