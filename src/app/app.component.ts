import { Component } from "@angular/core";
import { MapsService } from "./maps.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  location: Object;
  resultados: Object;

  constructor(private map: MapsService) {}

  ngOnInit() {
    this.map.getLocations("").subscribe((data) => {
      this.resultados = data.resultado;
    });
  }
  getLocations($event){
    const inputValue = $event.target.value;
    
    this.map.getLocations(inputValue).subscribe((data) => {  
      this.resultados = data.resultado;
    });
  } 

}
