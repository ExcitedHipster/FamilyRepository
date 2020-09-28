import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/Models/Family';
import { FamilyService } from 'src/app/Services/family.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  family;

  constructor(private route: ActivatedRoute,private _familyService:FamilyService) { }

  ngOnInit() {
    let familyId=parseInt(this.route.snapshot.paramMap.get('id'));
    this.family=this._familyService.getFamily(familyId);
  }

  setFamily(Family){
    Family.id=this.family.id;
    this._familyService.updateFamily(Family);
  }

}
