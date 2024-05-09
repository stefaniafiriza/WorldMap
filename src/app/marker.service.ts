import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  countries: string = '/assets/data/europe-capitals.geojson';

  constructor(
    private http: HttpClient,
    private popupService: PopupService
  ) { }
  
  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.countries).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        marker.addTo(map);
      }
    });
  }

  makeCapitalCircleMarkers(map: L.Map) {
    let popup: any;
    this.http.get(this.countries).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const circle = L.circleMarker([lat, lon], { radius: 10 });

        popup = this.popupService.makeCapitalPopup(c.properties);   

        circle.bindPopup(popup);

        circle.addTo(map);
      }
    });
  }
}
