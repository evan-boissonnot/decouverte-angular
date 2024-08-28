import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { Directors } from '../../models';

@Component({
  selector: 'app-table-directors',
  standalone: true,
  imports: [],
  templateUrl: './table-directors.component.html',
  styleUrl: './table-directors.component.css'
})
export class TableDirectorsComponent implements OnChanges {

  items = input.required<Directors>() // cette variable VA etre mise à jour depuis le template parent
  addRequested = output<string>()

  ngOnChanges(changes: SimpleChanges): void {
    console.info(changes)
  }

  listenToClick(): void {
    console.info('youpi !!')
    this.addRequested.emit('youpi')
  }
}
