import { Component, OnInit } from '@angular/core';
import { Feature8Facade } from '@demo/domain1/domain';

@Component({
  selector: 'domain1-feature8',
  templateUrl: './feature8.component.html',
  styleUrls: ['./feature8.component.scss'],
})
export class Feature8Component implements OnInit {
  entity8List$ = this.feature8Facade.entity8List$;

  constructor(private feature8Facade: Feature8Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature8Facade.load();
  }
}
