import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor() {}

  ngOnInit(): void {
    this.players = [
      {
        id: 1,
        first_name: 'Zach Lavine',
      },
      {
        id: 2,
        first_name: 'Coby White',
      },
      {
        id: 3,
        first_name: 'Lauri Markkanen',
      },
      {
        id: 4,
        first_name: 'Wendell Carter Jr.',
      },
      {
        id: 5,
        first_name: 'Otto Porter Jr.',
      }
    ];
  }
}
