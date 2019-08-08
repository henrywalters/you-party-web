import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePartyComponent } from '../create-party/create-party.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    CreatePartyComponent,
    HomeComponent,
    CreatePartyComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
