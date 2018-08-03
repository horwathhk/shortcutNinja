import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatTabsModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import { ReferencesComponent } from './references/references.component';
import { FooterComponent } from './footer/footer.component'

const appRoutes: Routes = [
  {path:'gameboard', component: GameboardComponent},
  {path:'settings', component:SettingsComponent},
  {path:'references', component:ReferencesComponent},
  {path:'', redirectTo: '/gameboard', pathMatch:'full'},
 ];

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    SettingsComponent,
    NavComponent,
    ReferencesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
