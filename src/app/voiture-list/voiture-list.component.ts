import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {

  voitures: Voiture[];

  constructor() { }

  ngOnInit(): void {
    this.voitures = [
      {
        "id":1,
        "marque":"toyota",
        "couleur":"noir",
        "puissance":100,
        "annee":2002,
        "kilometrage":1553
     }
  ];
  }

}
