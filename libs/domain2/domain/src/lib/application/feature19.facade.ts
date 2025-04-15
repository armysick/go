import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity19 } from '../entities/entity19';
import { Entity19DataService } from '../infrastructure/entity19.data.service';

@Injectable({ providedIn: 'root' })
export class Feature19Facade {
  private entity19ListSubject = new BehaviorSubject<Entity19[]>([]);
  entity19List$ = this.entity19ListSubject.asObservable();

  constructor(private entity19DataService: Entity19DataService) {}

  load(): void {
    this.entity19DataService.load().subscribe({
      next: (entity19List) => {
        this.entity19ListSubject.next(entity19List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
