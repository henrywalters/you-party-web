import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IParty } from "you-party-shared";

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.api + "party/";
   }

  public async create(name: string = ""): Promise<void> {
    const response = await this.http.post(this.baseUrl, {
      name,
    });

    console.log(response);
  }
}
