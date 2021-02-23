import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.css']
})
export class PlayerDialogComponent implements OnInit {
  private backupPlayer: Partial<Player> = { ... this.data.player}
  constructor(
    public dialogRef: MatDialogRef<PlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlayerDialogData
  ) { }

  cancel(): void {
    this.data.player.jersey = this.backupPlayer.jersey
    this.data.player.name = this.backupPlayer.name
    this.data.player.position = this.backupPlayer.position
    this.data.player.points = this.backupPlayer.points
    this.data.player.assists = this.backupPlayer.assists
    this.data.player.rebounds = this.backupPlayer.rebounds
    this.data.player.steals = this.backupPlayer.steals
    this.data.player.blocks = this.backupPlayer.blocks
    this.data.player.turnovers = this.backupPlayer.turnovers
    this.dialogRef.close(this.data)
  }
  ngOnInit(): void {
  }

}

export interface PlayerDialogData {
  player: Player;
  enableDelete: boolean;
}

export interface PlayerDialogResult {
  player: Player;
  delete?: boolean
}
