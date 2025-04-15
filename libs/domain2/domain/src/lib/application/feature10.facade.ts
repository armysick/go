import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity10 } from '../entities/entity10';
import { Entity10DataService } from '../infrastructure/entity10.data.service';

@Injectable({ providedIn: 'root' })
export class Feature10Facade {
  private entity10ListSubject = new BehaviorSubject<Entity10[]>([]);
  entity10List$ = this.entity10ListSubject.asObservable();

  constructor(private entity10DataService: Entity10DataService) {}

  load(): void {
    this.entity10DataService.load().subscribe({
      next: (entity10List) => {
        this.entity10ListSubject.next(entity10List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
