import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity12 } from '../entities/entity12';
import { Entity12DataService } from '../infrastructure/entity12.data.service';

@Injectable({ providedIn: 'root' })
export class Feature12Facade {
  private entity12ListSubject = new BehaviorSubject<Entity12[]>([]);
  entity12List$ = this.entity12ListSubject.asObservable();

  constructor(private entity12DataService: Entity12DataService) {}

  load(): void {
    this.entity12DataService.load().subscribe({
      next: (entity12List) => {
        this.entity12ListSubject.next(entity12List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
