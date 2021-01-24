import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/Player';
import { PlayerService } from '../../services/player.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(private playerService:PlayerService) {}

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players
    })
  }
}
