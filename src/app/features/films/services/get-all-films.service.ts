import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Films } from "../models/film";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class GetAllFilmsService {
  private readonly httpClient = inject(HttpClient)

  getAll(): Observable<Films> {
    return this.httpClient.get<Films>(environment.apis.films.getAll);
  }
}
