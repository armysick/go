import { Component, OnInit } from '@angular/core';
import { Feature7Facade } from '@demo/domain5/domain';

@Component({
  selector: 'domain5-feature7',
  templateUrl: './feature7.component.html',
  styleUrls: ['./feature7.component.scss'],
})
export class Feature7Component implements OnInit {
  entity7List$ = this.feature7Facade.entity7List$;

  constructor(private feature7Facade: Feature7Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature7Facade.load();
  }
}
