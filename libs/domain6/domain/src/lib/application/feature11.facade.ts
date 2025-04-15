import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Entity11 } from '../entities/entity11';
import { Entity11DataService } from '../infrastructure/entity11.data.service';

@Injectable({ providedIn: 'root' })
export class Feature11Facade {
  private entity11ListSubject = new BehaviorSubject<Entity11[]>([]);
  entity11List$ = this.entity11ListSubject.asObservable();

  constructor(private entity11DataService: Entity11DataService) {}

  load(): void {
    this.entity11DataService.load().subscribe({
      next: (entity11List) => {
        this.entity11ListSubject.next(entity11List);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
