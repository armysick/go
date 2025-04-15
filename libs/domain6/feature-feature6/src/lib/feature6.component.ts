import { Component, OnInit } from '@angular/core';
import { Feature6Facade } from '@demo/domain6/domain';

@Component({
  selector: 'domain6-feature6',
  templateUrl: './feature6.component.html',
  styleUrls: ['./feature6.component.scss'],
})
export class Feature6Component implements OnInit {
  entity6List$ = this.feature6Facade.entity6List$;

  constructor(private feature6Facade: Feature6Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.feature6Facade.load();
  }
}
