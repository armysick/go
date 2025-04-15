import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity1 } from '../entities/entity1';
import { Entity1DataService } from '../infrastructure/entity1.data.service';

@Injectable({ providedIn: 'root' })
export class Feature1Facade {
  private entity1ListSubject = new BehaviorSubject<Entity1[]>([]);
  entity1List$ = this.entity1ListSubject.asObservable();

  constructor(private entity1DataService: Entity1DataService) {}

  load(): void {
    console.log('Manfred was here!!! Hello from DWX!!');
    this.entity1DataService.load().subscribe({
      next: (entity1List) => {
        this.entity1ListSubject.next(entity1List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
