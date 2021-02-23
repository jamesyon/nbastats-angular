import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { TeamDialogComponent } from './components/team-dialog/team-dialog.component'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { PlayerDialogComponent } from './components/player-dialog/player-dialog.component';
import { TeamstatsDialogComponent } from './components/teamstats-dialog/teamstats-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    HeaderLayoutComponent,
    TeamDialogComponent,
    PlayerDialogComponent,
    TeamstatsDialogComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TeamsComponent },
      { path: 'roster-stats', component: PlayersComponent },
    ]),
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      projectId: 'nba-angular-4ad78'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
