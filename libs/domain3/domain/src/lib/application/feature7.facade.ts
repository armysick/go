import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity7 } from '../entities/entity7';
import { Entity7DataService } from '../infrastructure/entity7.data.service';

@Injectable({ providedIn: 'root' })
export class Feature7Facade {
  private entity7ListSubject = new BehaviorSubject<Entity7[]>([]);
  entity7List$ = this.entity7ListSubject.asObservable();

  constructor(private entity7DataService: Entity7DataService) {}

  load(): void {
    this.entity7DataService.load().subscribe({
      next: (entity7List) => {
        this.entity7ListSubject.next(entity7List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
