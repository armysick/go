import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity2 } from '../entities/entity2';
import { Entity2DataService } from '../infrastructure/entity2.data.service';

@Injectable({ providedIn: 'root' })
export class Feature2Facade {
  private entity2ListSubject = new BehaviorSubject<Entity2[]>([]);
  entity2List$ = this.entity2ListSubject.asObservable();

  constructor(private entity2DataService: Entity2DataService) {}

  load(): void {
    this.entity2DataService.load().subscribe({
      next: (entity2List) => {
        this.entity2ListSubject.next(entity2List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
