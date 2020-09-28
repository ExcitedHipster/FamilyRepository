import { Injectable } from '@angular/core';
import { Family } from '../Models/Family';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  
   currentFamily:Family;

  families:Family[] = [
    { id: 1, name: "Tsirekidze",  budget: 3500},
    { id: 2, name: "Kilasonia",  budget: 500},
    { id: 3, name: "Pxakadze",  budget: 15000},
    { id: 4, name: "Tevdoradze", budget: 850},
  ];

  constructor() { }

  getFamily(id){
     return this.families.find(x=>x.id==id);
  }

  getFamilies(){
    return this.families;
  }

  addFamily(family:Family){
    if(this.families.length==0) family.id=0;
    else family.id=this.getMaxId();
    family.id++;
    this.families.push(family);
  }


   getMaxId(){
    let ans;
  
    for (let index = 0; index < this.families.length; index++) {
       ans = this.families[index];
    }
     return ans.id;
   }

  deleteFamily(id){
    let family=this.getFamily(id);
    let index = this.families.indexOf(family);
    this.families.splice(index,1);
  }

  updateFamily(family){
    console.log(family);
    let originalFamily= this.getFamily(family.id);
    let index = this.families.indexOf(originalFamily);
    this.families.splice(index,1,family);
  }


  getFamilyId(FamilyName){
     let family = this.families.find(x=>x.name==FamilyName);
     return family;
  }
  

}
