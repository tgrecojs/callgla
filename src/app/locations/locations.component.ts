import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  lat: number = 41.410038;
  lng: number = -75.661802;
  latTwo: number = 41.833724;
  lngTwo: number =  -75.877505;
  scrantonOffice: string = 'Scranton Office';
  montroseOffice: string = 'Montrose Office';
}
