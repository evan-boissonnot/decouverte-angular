import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../../models/film';

@Component({
  selector: 'lucca-add-film',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-film.component.html',
  styleUrl: './add-film.component.css'
})
export class AddFilmComponent {
  film: Film = { titre: '' }

  save(): void {

  }
}
