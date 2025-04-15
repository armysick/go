import { Component, OnInit } from '@angular/core';
import { Feature13Facade } from '@demo/domain2/domain';

@Component({
  selector: 'domain2-feature13',
  templateUrl: './feature13.component.html',
  styleUrls: ['./feature13.component.scss'],
})
export class Feature13Component implements OnInit {
  entity13List$ = this.feature13Facade.entity13List$;

  constructor(private feature13Facade: Feature13Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature13Facade.load();
  }
}
