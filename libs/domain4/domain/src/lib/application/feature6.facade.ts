import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity6 } from '../entities/entity6';
import { Entity6DataService } from '../infrastructure/entity6.data.service';

@Injectable({ providedIn: 'root' })
export class Feature6Facade {
  private entity6ListSubject = new BehaviorSubject<Entity6[]>([]);
  entity6List$ = this.entity6ListSubject.asObservable();

  constructor(private entity6DataService: Entity6DataService) {}

  load(): void {
    this.entity6DataService.load().subscribe({
      next: (entity6List) => {
        this.entity6ListSubject.next(entity6List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
