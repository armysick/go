import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity17 } from '../entities/entity17';
import { Entity17DataService } from '../infrastructure/entity17.data.service';

@Injectable({ providedIn: 'root' })
export class Feature17Facade {
  private entity17ListSubject = new BehaviorSubject<Entity17[]>([]);
  entity17List$ = this.entity17ListSubject.asObservable();

  constructor(private entity17DataService: Entity17DataService) {}

  load(): void {
    this.entity17DataService.load().subscribe({
      next: (entity17List) => {
        this.entity17ListSubject.next(entity17List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
