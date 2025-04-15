import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity14 } from '../entities/entity14';
import { Entity14DataService } from '../infrastructure/entity14.data.service';

@Injectable({ providedIn: 'root' })
export class Feature14Facade {
  private entity14ListSubject = new BehaviorSubject<Entity14[]>([]);
  entity14List$ = this.entity14ListSubject.asObservable();

  constructor(private entity14DataService: Entity14DataService) {}

  load(): void {
    this.entity14DataService.load().subscribe({
      next: (entity14List) => {
        this.entity14ListSubject.next(entity14List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
