import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../model/voiture';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent implements OnInit {

  voiture: Voiture = new Voiture();
  id: number;

  constructor(private voitureService: VoitureService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.voitureService.getVoitureById(this.id).subscribe(data=>{
      this.voiture = data;
    },error=>console.log(error));
  }

  updateVoiture(){
    this.voitureService.updateVoiture(this.id,this.voiture).subscribe(data =>{
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
    this.updateVoiture();
  }

}
