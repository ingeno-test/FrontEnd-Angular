import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateVoitureComponent } from './create-voiture/create-voiture.component';
import { FormsModule } from '@angular/forms';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    VoitureListComponent,
    CreateVoitureComponent,
    UpdateVoitureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
