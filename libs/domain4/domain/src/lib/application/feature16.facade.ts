import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity16 } from '../entities/entity16';
import { Entity16DataService } from '../infrastructure/entity16.data.service';

@Injectable({ providedIn: 'root' })
export class Feature16Facade {
  private entity16ListSubject = new BehaviorSubject<Entity16[]>([]);
  entity16List$ = this.entity16ListSubject.asObservable();

  constructor(private entity16DataService: Entity16DataService) {}

  load(): void {
    this.entity16DataService.load().subscribe({
      next: (entity16List) => {
        this.entity16ListSubject.next(entity16List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
