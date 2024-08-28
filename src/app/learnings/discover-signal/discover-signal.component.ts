import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-discover-signal',
  standalone: true,
  imports: [],
  templateUrl: './discover-signal.component.html',
  styleUrl: './discover-signal.component.css'
})
export class DiscoverSignalComponent implements OnInit {

  titre = signal('decouverte-angular')
  titreMaj = computed(() => this.titre().toUpperCase())

  ngOnInit(): void {
    setTimeout(() => {
      this.titre.set('La communauté de l\'anneau');
    }, 1500);
  }
}
