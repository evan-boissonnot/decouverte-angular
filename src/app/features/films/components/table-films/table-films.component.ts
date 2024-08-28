import { Component, computed, input, output } from '@angular/core';
import { Film, Films } from '../../models/film';

@Component({
  selector: 'app-table-films',
  standalone: true,
  imports: [],
  templateUrl: './table-films.component.html',
  styleUrl: './table-films.component.css'
})
export class TableFilmsComponent {
  items = input.required<Films>()
  itemsNonEmpty = computed<Films>(() => this.items().filter(item => item.titre !== ''))

  // items2 = input<Films>()
  requireToDelete = output<Film>()

  clickToDelete(item: Film): void {
    this.requireToDelete.emit(item)
  }
}
