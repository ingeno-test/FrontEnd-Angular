import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../model/voiture';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-create-voiture',
  templateUrl: './create-voiture.component.html',
  styleUrls: ['./create-voiture.component.css']
})
export class CreateVoitureComponent implements OnInit {

  voiture: Voiture =new Voiture();

  constructor(private voitureService: VoitureService, private router: Router) { }

  ngOnInit(): void {
  }

  saveVoiture(){
    this.voitureService.createVoiture(this.voiture).subscribe(data =>{
      console.log(data);
      this.gotoVoitureList();
    },
       error=>console.log(error)
      );
  }
  gotoVoitureList(){
    this.router.navigate(['/voitures']);
  }
  onSubmit(){
    this.saveVoiture();
  }

}
