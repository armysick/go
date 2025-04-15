import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity20 } from '../entities/entity20';
import { Entity20DataService } from '../infrastructure/entity20.data.service';

@Injectable({ providedIn: 'root' })
export class Feature20Facade {
  private entity20ListSubject = new BehaviorSubject<Entity20[]>([]);
  entity20List$ = this.entity20ListSubject.asObservable();

  constructor(private entity20DataService: Entity20DataService) {}

  load(): void {
    this.entity20DataService.load().subscribe({
      next: (entity20List) => {
        this.entity20ListSubject.next(entity20List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
