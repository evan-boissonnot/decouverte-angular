import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListFilmsComponent } from './features/films/components/list-films/list-films.component';
import { DiscoverSignalComponent } from './learnings/discover-signal/discover-signal.component';
import { ListDirectorsComponent } from "./features/directors/components/list-directors/list-directors.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListFilmsComponent, DiscoverSignalComponent, ListFilmsComponent, ListDirectorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('decouverte-angular');
}
