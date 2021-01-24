import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Player } from '../models/Player'


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playersUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  playerLimit = '?_limit=5'

  constructor(private http: HttpClient) { }

  // Get Players
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.playersUrl}${this.playerLimit}`)
  }
}
