import { Component, OnInit } from '@angular/core';
import { Feature10Facade } from '@demo/domain8/domain';

@Component({
  selector: 'domain8-feature10',
  templateUrl: './feature10.component.html',
  styleUrls: ['./feature10.component.scss'],
})
export class Feature10Component implements OnInit {
  entity10List$ = this.feature10Facade.entity10List$;

  constructor(private feature10Facade: Feature10Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature10Facade.load();
  }
}
