import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSubject = new Subject<{ id: string, state: boolean }>();
  modalState$ = this.modalSubject.asObservable();

  open(id: string) {
    this.modalSubject.next({ id, state: true });
  }

  close(id: string) {
    this.modalSubject.next({ id, state: false });
  }
}
