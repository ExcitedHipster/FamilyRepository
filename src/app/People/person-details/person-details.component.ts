import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {PeopleService} from '../../Services/people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person;
  constructor(private route: ActivatedRoute,private _personService:PeopleService) { }

  ngOnInit() {
    let personId=parseInt(this.route.snapshot.paramMap.get('id'));
    this.person=this._personService.getPerson(personId);
  }

}
