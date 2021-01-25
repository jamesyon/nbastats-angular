import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Player } from '../models/Player'


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // player: ''
  constructor(private http: HttpClient) { }

  // Get Players
  // getPlayers(): Observable<Player[]> {
  //   return this.http.get<Player[]>({this.player})
  // }
}
