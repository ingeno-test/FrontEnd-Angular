import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../model/voiture';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {

  voitures: Voiture[];

  constructor(private voitureService: VoitureService, private router: Router) { }

  ngOnInit(): void {
    this.getVoitures();
  }

  private getVoitures(){
    this.voitureService.getVoituresList().subscribe(data => {
      this.voitures = data;
    });
  }

  updateVoiture(id: number){
    this.router.navigate(['update-voiture',id]);
  }

  deleteVoiture(id: number){
    this.voitureService.deleteVoiture(id).subscribe(data => {
      console.log(data);
      this.getVoitures;
    });
  }

}
