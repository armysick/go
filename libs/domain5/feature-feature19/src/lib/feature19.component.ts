import { Component, OnInit } from '@angular/core';
import { Feature19Facade } from '@demo/domain5/domain';

@Component({
  selector: 'domain5-feature19',
  templateUrl: './feature19.component.html',
  styleUrls: ['./feature19.component.scss'],
})
export class Feature19Component implements OnInit {
  entity19List$ = this.feature19Facade.entity19List$;

  constructor(private feature19Facade: Feature19Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature19Facade.load();
  }
}
