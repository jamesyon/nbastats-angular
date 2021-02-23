import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamStats } from 'src/app/models/TeamStats';
@Component({
  selector: 'app-teamstats-dialog',
  templateUrl: './teamstats-dialog.component.html',
  styleUrls: ['./teamstats-dialog.component.css']
})
export class TeamstatsDialogComponent implements OnInit {
  private backupTeamStats: Partial<TeamStats> = { ... this.data.teamstats}
  constructor(
    public dialogRef: MatDialogRef<TeamstatsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TeamStatsDialogData
  ) { }

  cancel(): void {
    this.data.teamstats.points = this.backupTeamStats.points
    this.data.teamstats.assists = this.backupTeamStats.assists
    this.data.teamstats.rebounds = this.backupTeamStats.rebounds
    this.data.teamstats.steals = this.backupTeamStats.steals
    this.data.teamstats.blocks = this.backupTeamStats.blocks
    this.data.teamstats.turnovers = this.backupTeamStats.turnovers
    this.dialogRef.close(this.data)
  }
  ngOnInit(): void {
  }

}

export interface TeamStatsDialogData {
  teamstats: TeamStats;
  enableDelete: boolean;
}

export interface TeamStatsDialogResult {
  teamstats: TeamStats;
  delete?: boolean
}
