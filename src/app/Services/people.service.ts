import { Injectable } from '@angular/core';
import { people } from '../Models/People';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  currentPerson;

  people:people[]= [
    { "id": 1, "name": "Gigi", "age": 18, "money": 80},
    { "id": 2, "name": "Kaxa", "age": 55, "money": 500},
    { "id": 3, "name": "Nato", "age": 52, "money": 350},
    { "id": 4, "name": "Mate", "age": 15, "money": 10},
  ];
  constructor() { }

  getPeople(){
     return this.people;
  }

  addPerson(person){
    if(this.people.length==0) person.id=0;
    else person.id=this.getMaxId();
    this.people.push(person);
  }

  deletePerson(id){
    let person=this.getPerson(id);
    let index = this.people.indexOf(person);
    this.people.splice(index,1);
  }

  updatePerson(person){
    console.log(person);
    let originalFamily= this.getPerson(person.id);
    let index = this.people.indexOf(originalFamily);
    this.people.splice(index,1,person);
  }

  getMaxId(){
    let ans;
  
    for (let index = 0; index < this.people.length; index++) {
       ans = this.people[index];
    }
     return ans.id+1;
   }


  getPerson(id){
    return this.people.find(x=>x.id==id);
  }

  getPersonId(PersonName){
    let Person = this.people.find(x=>x.name==PersonName);
     return Person;
  }

}
