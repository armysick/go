import { Component, OnInit } from '@angular/core';
import { Feature14Facade } from '@demo/domain1/domain';

@Component({
  selector: 'domain1-feature14',
  templateUrl: './feature14.component.html',
  styleUrls: ['./feature14.component.scss'],
})
export class Feature14Component implements OnInit {
  entity14List$ = this.feature14Facade.entity14List$;

  constructor(private feature14Facade: Feature14Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature14Facade.load();
  }
}
