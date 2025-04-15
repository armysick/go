import { Component, OnInit } from '@angular/core';
import { Feature5Facade } from '@demo/domain5/domain';

@Component({
  selector: 'domain5-feature5',
  templateUrl: './feature5.component.html',
  styleUrls: ['./feature5.component.scss'],
})
export class Feature5Component implements OnInit {
  entity5List$ = this.feature5Facade.entity5List$;

  constructor(private feature5Facade: Feature5Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature5Facade.load();
  }
}
