import { Component, OnInit } from '@angular/core';
import { PartyService } from '../party.service';

@Component({
  selector: 'create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.less']
})
export class CreatePartyComponent implements OnInit {

  constructor(
    private readonly party: PartyService
  ) { }

  ngOnInit() {
    this.party.create();
  }

}
