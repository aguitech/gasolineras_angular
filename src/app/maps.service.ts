import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
  country_calling_code: string;
  city: string;
  ip: 0;
}
@Injectable({
  providedIn: "root",
})
export class MapsService {
  constructor(private http: HttpClient) {}

  getLocations(buscar:'Any') {

    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('buscar', buscar);
    
    return this.http
      .post('https://aguitech.casidios.com/panel/ws_gasolineras.php', body, {
        headers: myheader,
      });
      //.subscribe();
  }
}
