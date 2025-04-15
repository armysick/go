import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity13 } from '../entities/entity13';
import { Entity13DataService } from '../infrastructure/entity13.data.service';

@Injectable({ providedIn: 'root' })
export class Feature13Facade {
  private entity13ListSubject = new BehaviorSubject<Entity13[]>([]);
  entity13List$ = this.entity13ListSubject.asObservable();

  constructor(private entity13DataService: Entity13DataService) {}

  load(): void {
    this.entity13DataService.load().subscribe({
      next: (entity13List) => {
        this.entity13ListSubject.next(entity13List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
