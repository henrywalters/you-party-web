import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePartyComponent } from './create-party/create-party.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { PartyService } from './party.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HomeModule,
  ],
  providers: [
    PartyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
