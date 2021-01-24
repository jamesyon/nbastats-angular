import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamStatsComponent } from './components/team-stats/team-stats.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamStatsComponent,
    PlayersComponent,
    PlayerStatsComponent,
    HeaderLayoutComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TeamsComponent },
      { path: 'players-list', component: PlayersComponent },
      { path: 'players-stats', component: PlayerStatsComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
