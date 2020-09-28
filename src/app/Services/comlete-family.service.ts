import { Injectable } from '@angular/core';
import { CompleteFamily } from '../Models/CompleteFamily';
import { people } from '../Models/People';
import { FamilyService } from './family.service';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root'
})
export class ComleteFamilyService {

  CompleteFamilies: CompleteFamily[] = [];
  members:people[]=[];

  constructor(private _familyService:FamilyService,private _peopleService: PeopleService) { }

  addMember(family,person){
    let completeFamily:CompleteFamily = new CompleteFamily;
    completeFamily.id=this.getMaxId();
    completeFamily.FamilyId=this.getFamilyId(family);
    completeFamily.PersonId=this.getPersonId(person);
    
    console.log(completeFamily);
    if(completeFamily.FamilyId!=-1 && completeFamily.PersonId!=-1){
      this._familyService.getFamily(completeFamily.FamilyId).budget+=this._peopleService.getPerson(completeFamily.PersonId).money;
      this.CompleteFamilies.push(completeFamily);
      return "";
    }
    else return "Please Enter Valid Info";
    
  }


  deleteMember(familyId,personId){
     for (let index = 0; index < this.CompleteFamilies.length; index++) {
       if(this.CompleteFamilies[index].FamilyId==familyId
         && this.CompleteFamilies[index].PersonId==personId){
          this._familyService.getFamily(familyId).budget-=this._peopleService.getPerson(personId).money;
           this.CompleteFamilies.splice(index,1);
           break;
         }
     }
  }



  getMaxId(){
    let ans:number=0;
    console.log(this.CompleteFamilies);
    for (let index = 0; index < this.CompleteFamilies.length; index++) {
       ans = this.CompleteFamilies[index].id;
    }
    
     return ans+1;
  }

  getFamilyMembers(FamilyId){
    
    console.log(FamilyId);
    let members:people[] = [];

    this.CompleteFamilies.forEach(element => {
      if(element.FamilyId==FamilyId) members.push(this._peopleService.getPerson(element.PersonId));
    });
    

    return members;
  }

  getFamilyId(FamilyName){
    //console.log(this._familyService.getFamilyId(FamilyName))
      try{return this._familyService.getFamilyId(FamilyName).id;}
      catch{return -1;}
  }

  getPersonId(PersonName){
    try{return this._peopleService.getPersonId(PersonName).id;}
    catch{return -1;}
  }


}
