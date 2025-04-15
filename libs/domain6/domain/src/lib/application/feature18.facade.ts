import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity18 } from '../entities/entity18';
import { Entity18DataService } from '../infrastructure/entity18.data.service';

@Injectable({ providedIn: 'root' })
export class Feature18Facade {
  private entity18ListSubject = new BehaviorSubject<Entity18[]>([]);
  entity18List$ = this.entity18ListSubject.asObservable();

  constructor(private entity18DataService: Entity18DataService) {}

  load(): void {
    this.entity18DataService.load().subscribe({
      next: (entity18List) => {
        this.entity18ListSubject.next(entity18List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
