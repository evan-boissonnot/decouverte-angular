import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Film, Films } from '../../models/film';
import { TableFilmsComponent } from '../table-films/table-films.component';
import { GetAllFilmsService } from '../../services/get-all-films.service';
import { AsyncPipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { AddFilmComponent } from '../add-film/add-film.component';

@Component({
  selector: 'app-list-films',
  standalone: true,
  imports: [TableFilmsComponent, AsyncPipe, AddFilmComponent],
  templateUrl: './list-films.component.html',
  styleUrl: './list-films.component.css'
})
export class ListFilmsComponent implements OnInit, OnDestroy {
  private readonly service = inject(GetAllFilmsService)
  private readonly films$ = this.service.getAll() // Lazy : rien n'est fait ici
  films: Films = [];
  private containerSubscriptions = new Subscription()

  ngOnDestroy(): void {
    this.containerSubscriptions.unsubscribe()
  }

  ngOnInit(): void {
    const sub = this.films$.subscribe({
      next: items => this.films = items
    })// ça déclenche tout le code dans l'observable
    this.containerSubscriptions.add(sub)
    // this.films$.subscribe()// ça déclenche tout le code dans l'observable

    // const observable$ = new Observable<string>(subscriber => {
    //   subscriber.next('coucou')
    //   subscriber.next('coucou 2')
    //   subscriber.complete()
    //   //subscriber.next('coucou 3')
    // })
    // observable$.subscribe({
    //   next: item => console.info(item),
    //   complete: () => console.info('youpi fini !'),
    //   error: err => console.error(err)
    // })
  }
  // films: Films = [ { titre: 'La communauté de l\'anneau' },
  //                  { titre: 'Les deux tours' }
  //                ]

  toDeleteOneItem(item: Film): void {
    // this.films = [...this.films.filter(film => film.titre !== item.titre)]
  }
}
