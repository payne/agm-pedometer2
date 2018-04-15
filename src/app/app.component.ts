import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsAPIWrapper, PolyMouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat = 41.25236;
  lng = -96.001897;
  mapTypeId = 'terrain';
  kmlurl = 'http://MattPayne.org/agm-pedometer2/Friday.kml';
  mapPointer: MarkerType[] = [];

  mClick(e: any) {
   this.mapPointer.push({lat: e.coords.lat, lng: e.coords.lng});
  }
}

// just an interface for type safety.
interface MarkerType {
  lat: number;
  lng: number;
}

