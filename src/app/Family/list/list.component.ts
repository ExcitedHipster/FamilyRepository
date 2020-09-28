import { Component, OnInit } from '@angular/core';
import { FamilyService } from 'src/app/Services/family.service';
import {Router} from'@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class FamilyListComponent implements OnInit {

  families; 
  constructor(private _familyService:FamilyService,private _router: Router) { }

  ngOnInit(){
    this.families = this._familyService.getFamilies();
    console.log(this.families);
  }

  deleteFamily(id){
     this._familyService.deleteFamily(id);
  }

  chooseFamily(family){
     this._familyService.currentFamily=family;
     this._router.navigate(['/Home',family.id]);
  }

  updateFamily(id){
    this._router.navigate(['/updateFamily',id]);
  }

  addFamily(){
    this._router.navigate(['/addFamily']);
  }
}
