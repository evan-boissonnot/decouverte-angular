import { Injectable } from '@angular/core';
import { Directors } from '../models';

@Injectable({
  providedIn: 'root' // singleton
})
export class GetAllDirectorsService {
  getAll(): Directors {
    return [{ id: 1, surname: 'Peter Lucas', xp: 100 }]
  }
}
