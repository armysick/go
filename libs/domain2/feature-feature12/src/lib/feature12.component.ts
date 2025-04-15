import { Component, OnInit } from '@angular/core';
import { Feature12Facade } from '@demo/domain2/domain';

@Component({
  selector: 'domain2-feature12',
  templateUrl: './feature12.component.html',
  styleUrls: ['./feature12.component.scss'],
})
export class Feature12Component implements OnInit {
  entity12List$ = this.feature12Facade.entity12List$;

  constructor(private feature12Facade: Feature12Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature12Facade.load();
  }
}
