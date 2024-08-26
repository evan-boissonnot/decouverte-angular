import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListFilmsComponent } from './features/films/components/list-films/list-films.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListFilmsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'decouverte-angular';
}
