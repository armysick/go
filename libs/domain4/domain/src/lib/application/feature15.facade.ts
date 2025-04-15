import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity15 } from '../entities/entity15';
import { Entity15DataService } from '../infrastructure/entity15.data.service';

@Injectable({ providedIn: 'root' })
export class Feature15Facade {
  private entity15ListSubject = new BehaviorSubject<Entity15[]>([]);
  entity15List$ = this.entity15ListSubject.asObservable();

  constructor(private entity15DataService: Entity15DataService) {}

  load(): void {
    this.entity15DataService.load().subscribe({
      next: (entity15List) => {
        this.entity15ListSubject.next(entity15List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
