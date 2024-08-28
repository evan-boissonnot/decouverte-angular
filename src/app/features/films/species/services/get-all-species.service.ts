import { inject, Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Species } from '../models/species';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

type OneSpecieResult = {
  average_height: number,
  name: string
}

type ApiResult = {
  results: OneSpecieResult[]
}

@Injectable({
  providedIn: 'root'
})
export class GetAllSpeciesService {
  private readonly httpClient = inject(HttpClient)

  getAll(): Observable<Species> {
    return this.httpClient.get<ApiResult>(environment.apis.species.getAll).pipe(
      filter(apiResult => apiResult.results.length > 0),
      map(apiResult => apiResult.results.map(res => ({ label: res.name }) ))
    )
  }
}
