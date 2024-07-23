// map.component.ts
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  map!: L.Map;
  marker?: L.Marker;

  @Output() locationChanged = new EventEmitter<{ lat: number; lng: number }>();

  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  initializeMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.locate({ setView: true, maxZoom: 16 });

    this.map.on('locationfound', (e: L.LocationEvent) => {
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker(e.latlng, { draggable: true }).addTo(this.map)
        .bindPopup('You are here').openPopup();

      this.locationChanged.emit(e.latlng);

      this.marker.on('dragend', () => {
        const position = this.marker?.getLatLng();
        if (position) {
          this.marker?.setLatLng(position).bindPopup(`Lat: ${position.lat}, Lng: ${position.lng}`).openPopup();
          this.locationChanged.emit(position);
        }
      });
    });

    this.map.on('locationerror', (e: L.ErrorEvent) => {
      alert(e.message);
    });
  }

  getLocation(): { lat: number, lng: number } | undefined {
    if (this.marker) {
      const position = this.marker.getLatLng();
      return { lat: position.lat, lng: position.lng };
    }
    return undefined;
  }
}
