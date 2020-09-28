import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { people } from 'src/app/Models/People';
import {PeopleService} from '../../Services/people.service';

@Component({
  selector: 'app-update',
  templateUrl: './PersonUpdate.component.html',
  styleUrls: ['./PersonUpdate.component.css']
})
export class PeopleUpdateComponent implements OnInit {
  person;

  constructor(private route: ActivatedRoute,private _personService:PeopleService) { }

  ngOnInit() {
    let personId=parseInt(this.route.snapshot.paramMap.get('id'));
    this.person=this._personService.getPerson(personId);
  }

  setPerson(Person){
     let p= {id: this.person.id,name: Person.name,age: Person.age,money: Person.money};
     console.log(Person);
    this._personService.updatePerson(p);
  }

}
