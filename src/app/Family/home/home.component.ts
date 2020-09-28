import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/Models/Family';
import { people } from 'src/app/Models/People';
import { ComleteFamilyService } from 'src/app/Services/comlete-family.service';
import { FamilyService } from 'src/app/Services/family.service';
import { PeopleService } from 'src/app/Services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  family; members; budget;
  constructor(private _familyService:FamilyService,private _completeFamilyService:ComleteFamilyService ) { }

  ngOnInit(){
     
     this.family = this._familyService.currentFamily;
     this.members = this._completeFamilyService.getFamilyMembers(this.family.id);
     this.budget = this._familyService
     console.log(this.members);
  }

  deleteMember(personId){
    this._completeFamilyService.deleteMember(this.family.id,personId);
    this.members = this._completeFamilyService.getFamilyMembers(this.family.id);
  }

}
