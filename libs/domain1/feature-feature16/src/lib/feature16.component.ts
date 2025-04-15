import { Component, OnInit } from '@angular/core';
import { Feature16Facade } from '@demo/domain1/domain';

@Component({
  selector: 'domain1-feature16',
  templateUrl: './feature16.component.html',
  styleUrls: ['./feature16.component.scss'],
})
export class Feature16Component implements OnInit {
  entity16List$ = this.feature16Facade.entity16List$;

  constructor(private feature16Facade: Feature16Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature16Facade.load();
  }
}
