import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity5 } from '../entities/entity5';
import { Entity5DataService } from '../infrastructure/entity5.data.service';

@Injectable({ providedIn: 'root' })
export class Feature5Facade {
  private entity5ListSubject = new BehaviorSubject<Entity5[]>([]);
  entity5List$ = this.entity5ListSubject.asObservable();

  constructor(private entity5DataService: Entity5DataService) {}

  load(): void {
    this.entity5DataService.load().subscribe({
      next: (entity5List) => {
        this.entity5ListSubject.next(entity5List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
