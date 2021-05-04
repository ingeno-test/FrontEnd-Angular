
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateVoitureComponent } from "./create-voiture/create-voiture.component";
import { VoitureListComponent } from "./voiture-list/voiture-list.component";

const routes: Routes = [
    {path: 'voitures', component: VoitureListComponent},
    {path: 'create-voiture', component: CreateVoitureComponent},
    {path: '', redirectTo: '/voitures', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}