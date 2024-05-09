import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopupService } from './popup.service';
import { GeojsonService } from './geojson.service';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AnswerComponent } from './answer/answer.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: '', component: MapComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MarkerService,
    PopupService,
    GeojsonService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
