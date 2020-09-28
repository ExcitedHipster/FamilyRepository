import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/Services/people.service';

@Component({
  selector: 'app-add',
  templateUrl: './PersonAdd.component.html',
  styleUrls: ['./PersonAdd.component.css']
})
export class PersonAddComponent implements OnInit {

  constructor(private _peopleService:PeopleService) { }

  ngOnInit() {
  }

  addPerson(person){
    this._peopleService.addPerson(person);
  }

}
