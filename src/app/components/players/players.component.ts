import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { MatDialog } from '@angular/material/dialog'
import { PlayerDialogComponent, PlayerDialogResult } from '../player-dialog/player-dialog.component'
import { TeamstatsDialogComponent, TeamStatsDialogResult } from '../teamstats-dialog/teamstats-dialog.component'
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players = this.store.collection('player').valueChanges({ idField: 'id' })
  teamStats = this.store.collection('teamStats').valueChanges({ idField: 'id' })

  constructor(private dialog: MatDialog, private store: AngularFirestore) {}

  ngOnInit(): void {}

  newPlayer(): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: '270px',
      data: {
        player: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: PlayerDialogResult) => this.store.collection('player').add(result.player));
  }

  newTeamStats(): void {
    const dialogRef = this.dialog.open(TeamstatsDialogComponent, {
      width: '270px',
      data: {
        teamstats: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TeamStatsDialogResult) => this.store.collection('teamStats').add(result.teamstats));
  }
}

// Player[] = [


//   { jersey: 22, name: 'Otto Porter Jr.', position: 'SF', points: 12.5, assists: 1.9, rebounds: 6.8, steals: 0.7, blocks: 0.1, turnovers:1.1 }
// ];
