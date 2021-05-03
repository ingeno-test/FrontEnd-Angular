
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VoitureListComponent } from "./voiture-list/voiture-list.component";

const routes: Routes = [
    {path: 'voitures', component: VoitureListComponent},
    {path: '', redirectTo: '/voitures', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}