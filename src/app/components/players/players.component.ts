import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/Player';
import { PlayerService } from '../../services/player.service';

const players: Player[] = [
  { jersey: 8, name: 'Zach Lavine', position: 'SF', points: 26.8, assists: 5.4, rebounds: 5.2, steals: 1.4, blocks: 0.6, turnovers:4.2 },
  { jersey: 24, name: 'Lauri Markkanen', position: 'PF', points: 18.6, assists: 1, rebounds: 6.6, steals: 0.8, blocks: 0.8, turnovers:1.8 },
  { jersey: 0, name: 'Coby White', position: 'PG', points: 15.9, assists: 5.9, rebounds: 5.1, steals: 0.5, blocks: 0.1, turnovers:2.8 },
  { jersey: 34, name: 'Wendell Carter Jr.', position: 'C', points: 12.8, assists: 2.4, rebounds: 8, steals: 0.6, blocks: 0.6, turnovers:1.9 },
  { jersey: 22, name: 'Otto Porter Jr.', position: 'SF', points: 12.5, assists: 1.9, rebounds: 6.8, steals: 0.7, blocks: 0.1, turnovers:1.1 }
];

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  displayedColumns: string[] = ['No.', 'Name', 'Position', 'Points', 'Assists', 'Rebounds', 'Steals', 'Blocks', 'Turnovers'];
  dataSource = players

  constructor() {}

  ngOnInit(): void {}
}
