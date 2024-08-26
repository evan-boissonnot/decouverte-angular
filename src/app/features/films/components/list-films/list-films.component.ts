import { Component } from '@angular/core';
import { Films } from '../../models/film';

@Component({
  selector: 'app-list-films',
  standalone: true,
  imports: [],
  templateUrl: './list-films.component.html',
  styleUrl: './list-films.component.css'
})
export class ListFilmsComponent {
  films: Films = [ { titre: 'La communauté de l\'anneau' },
                   { titre: 'Les deux tours' }
                 ]
}
