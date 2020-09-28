import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/Services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people;
  constructor(private _peopleService:PeopleService, private _router:Router) { }

  ngOnInit(){
    this.people = this._peopleService.getPeople();
  }

  deletePerson(id){
    this._peopleService.deletePerson(id);
  }

  updatePerson(id){
    this._router.navigate(['/updatePerson',id]);
  }

  addPerson(){
    this._router.navigate(['/addPerson']);
  }

  personDetails(id){
    this._router.navigate(['/Person-Details',id]);
  }

}
