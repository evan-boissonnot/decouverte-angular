import { Component, inject, OnInit } from '@angular/core';
import { GetAllDirectorsService } from '../../services/get-all-directors.service';
import {Directors} from '../../models/index'
import { TableDirectorsComponent } from '../table-directors/table-directors.component';

@Component({
  selector: 'app-list-directors',
  standalone: true,
  imports: [TableDirectorsComponent],
  templateUrl: './list-directors.component.html',
  styleUrl: './list-directors.component.css'
})
export class ListDirectorsComponent implements OnInit {
  private readonly getAllService = inject(GetAllDirectorsService)
  directors: Directors | undefined

  ngOnInit(): void {
    this.directors = [...this.getAllService.getAll()]
  }

  addOneDirector(value: string): void {
    console.info(value)
  }
}
