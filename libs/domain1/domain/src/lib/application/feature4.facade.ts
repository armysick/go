import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity4 } from '../entities/entity4';
import { Entity4DataService } from '../infrastructure/entity4.data.service';

@Injectable({ providedIn: 'root' })
export class Feature4Facade {
  private entity4ListSubject = new BehaviorSubject<Entity4[]>([]);
  entity4List$ = this.entity4ListSubject.asObservable();

  constructor(private entity4DataService: Entity4DataService) {}

  load(): void {
    this.entity4DataService.load().subscribe({
      next: (entity4List) => {
        this.entity4ListSubject.next(entity4List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
