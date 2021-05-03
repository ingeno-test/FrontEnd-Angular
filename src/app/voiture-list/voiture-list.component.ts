import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {

  voitures: Voiture[];

  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.getVoitures();
  }

  private getVoitures(){
    this.voitureService.getVoituresList().subscribe(data => {
      this.voitures = data;
    });
  }

}
