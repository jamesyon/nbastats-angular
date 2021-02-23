import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit {
  private backupTeam: Partial<Team> = { ... this.data.team }
  constructor(
    public dialogRef: MatDialogRef<TeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TeamDialogData
  ) { }

  cancel(): void {
    this.data.team.name = this.backupTeam.name;
    this.data.team.conference = this.backupTeam.conference;
    this.dialogRef.close(this.data)
  }

  ngOnInit(): void {
  }

}

export interface TeamDialogData {
  team: Team;
  enableDelete: boolean;
}

export interface TeamDialogResult {
  team: Team;
  delete?: boolean;
}
