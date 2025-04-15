import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity3 } from '../entities/entity3';
import { Entity3DataService } from '../infrastructure/entity3.data.service';

@Injectable({ providedIn: 'root' })
export class Feature3Facade {
  private entity3ListSubject = new BehaviorSubject<Entity3[]>([]);
  entity3List$ = this.entity3ListSubject.asObservable();

  constructor(private entity3DataService: Entity3DataService) {}

  load(): void {
    this.entity3DataService.load().subscribe({
      next: (entity3List) => {
        this.entity3ListSubject.next(entity3List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
