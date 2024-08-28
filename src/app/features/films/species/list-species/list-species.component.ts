import { Component, inject, signal } from '@angular/core';
import { Film } from '../../models/film';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GetAllSpeciesService } from '../services/get-all-species.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lucca-list-species',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './list-species.component.html',
  styleUrl: './list-species.component.css'
})
export class ListSpeciesComponent {
  //private readonly service = inject(GetAllSpeciesService)
  // items = toSignal(this.service.getAll())
  items = toSignal(inject(GetAllSpeciesService).getAll())
}
