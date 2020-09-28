import { Component, OnInit } from '@angular/core';
import { FamilyService } from 'src/app/Services/family.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  constructor(private _familyService:FamilyService) { }

  ngOnInit() {
  }

  addFamily(Family){
    this._familyService.addFamily(Family);
  }

}
