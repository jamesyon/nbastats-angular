import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Team } from '../../models/Team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  // teams = this.store.collection('Team').valueChanges({ idField: 'id'})
  teams: Team[] = [{ id: 1, name: 'Chicago Bulls', conference: 'Eastern' }];

  constructor() {}
  // constructor(private store: AngularFirestore) {}

  // similar to ComponentDidMount
  ngOnInit(): void {}
}
