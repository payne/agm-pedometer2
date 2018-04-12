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
  lat = 51.678418;
  lng = 7.809007;
  mapTypeId = 'terrain';
  map: any;
  poly: any;

  markers: MarkerType[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
      infowindowContent: 'test'
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
      infowindowContent: 'test2'
    },
    {
      lat: 51.423858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      infowindowContent: 'test3'
    },
    {
      lat: 52.423858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      infowindowContent: 'test3'
    }
  ];

  constructor(private google: GoogleMapsAPIWrapper) {
   console.log('Here is google:');
   console.log(this.google);
  }

  mapReady(e: any) {
    console.log('mapReady');
    console.log(e);
    this.map = e;
    // this.poly = // new this.google._map.
    this.poly = new this.map.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.poly.setMap(this.map);
  }

  pClick(e: PolyMouseEvent) {
   console.log(`MGPV4: pClick(${e})`);
   console.log(e);
   console.log(e.latLng.lat());
   console.log(e.latLng.lng());

  let path = this.poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
	//         // and it will automatically appear.
   path.push(e.latLng);
  }

  mClick(e: any) {
   // TODO: What is the datatype here???
   console.log(`mClick MGPV4: mClick(${e})`);
   console.log(e);
   console.log(typeof e);
   console.log(e.coords.lat);
   console.log(e.coords.lng);
   this.markers.push({lat: e.coords.lat, lng: e.coords.lng, draggable: false, infowindowContent: 'junk'});
   console.log(this.markers.length);
  }
}

// just an interface for type safety.
interface MarkerType {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  infowindowContent: string;
}

