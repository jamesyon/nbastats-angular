import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {
  @Input() team: Team;
  constructor() { }

  ngOnInit(): void {
  }

}
