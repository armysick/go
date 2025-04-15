import { Component, OnInit } from '@angular/core';
import { Feature4Facade } from '@demo/domain7/domain';

@Component({
  selector: 'domain7-feature4',
  templateUrl: './feature4.component.html',
  styleUrls: ['./feature4.component.scss'],
})
export class Feature4Component implements OnInit {
  entity4List$ = this.feature4Facade.entity4List$;

  constructor(private feature4Facade: Feature4Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature4Facade.load();
  }
}
