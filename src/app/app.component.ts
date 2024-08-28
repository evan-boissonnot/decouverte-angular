import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ListFilmsComponent } from './features/films/components/list-films/list-films.component';
import { DiscoverSignalComponent } from './learnings/discover-signal/discover-signal.component';
import { ListDirectorsComponent } from "./features/directors/components/list-directors/list-directors.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ListFilmsComponent, DiscoverSignalComponent, ListFilmsComponent, ListDirectorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly router = inject(Router)
  title = signal('decouverte-angular')

  goToDirectors(): void {
    this.router.navigate(['directors'])
  }
}
