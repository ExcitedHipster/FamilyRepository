import { Component, OnInit } from '@angular/core';
import {ComleteFamilyService} from '../../Services/comlete-family.service';
import {Router} from'@angular/router';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  message:string;
  constructor(private _completeFamilyService: ComleteFamilyService,private _router: Router) { }

  ngOnInit(){
     
  }

  addMember(person){

     this.message = this._completeFamilyService.addMember(person.FamilyName,person.PersonName);
     if(this.message=="") this._router.navigate(['/Family-List']);
  }

}
