import { Component } from '@angular/core';
import { Film, Films } from '../../models/film';
import { TableFilmsComponent } from '../table-films/table-films.component';

@Component({
  selector: 'app-list-films',
  standalone: true,
  imports: [TableFilmsComponent],
  templateUrl: './list-films.component.html',
  styleUrl: './list-films.component.css'
})
export class ListFilmsComponent {
  films: Films = [ { titre: 'La communauté de l\'anneau' },
                   { titre: 'Les deux tours' }
                 ]

  toDeleteOneItem(item: Film): void {
    this.films = [...this.films.filter(film => film.titre !== item.titre)]
  }
}
