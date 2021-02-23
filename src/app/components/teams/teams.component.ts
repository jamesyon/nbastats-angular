import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { TeamDialogResult, TeamDialogComponent } from '../team-dialog/team-dialog.component'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teams = this.store.collection('team').valueChanges({ idField: 'id'})

  constructor(private dialog: MatDialog, private store: AngularFirestore) {}

  // similar to ComponentDidMount
  ngOnInit(): void {}

  newTeam(): void {
    const dialogRef = this.dialog.open(TeamDialogComponent, {
      width: '270px',
      data: {
        team: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TeamDialogResult) => this.store.collection('team').add(result.team));
  }
}
