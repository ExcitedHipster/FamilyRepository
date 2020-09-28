import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyListComponent } from './Family/list/list.component';
import { AddComponent } from './Family/add/add.component';
import { DeleteComponent } from './Family/delete/delete.component';
import { UpdateComponent } from './Family/update/update.component';
import { PersonAttachComponent } from './People/attach/attach.component';
import { PeopleService } from './Services/people.service';
import { FamilyService } from './Services/family.service';
import { HomeComponent } from './Family/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PeopleListComponent } from './People/people-list/people-list.component';
import { PeopleUpdateComponent } from './People/update/update.component';
import { PersonAddComponent } from './People/add/add.component';
import { PersonDetailsComponent } from './People/person-details/person-details.component';
import { MemberAddComponent } from './CompleteFamily/member-add/member-add.component';
import { MemberDeleteComponent } from './CompleteFamily/member-delete/member-delete.component';
import {ComleteFamilyService} from './Services/comlete-family.service';
import { ExpenseAddComponent } from './Expenses/expense-add/expense-add.component';
import { ExpenseListComponent } from './Expenses/expense-list/expense-list.component';
import { ExpenseService } from './Services/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    FamilyListComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    PersonAttachComponent,
    PeopleUpdateComponent,
    PersonAddComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    MemberAddComponent,
    MemberDeleteComponent,
    HomeComponent,
    ExpenseAddComponent,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FamilyService,PeopleService,ComleteFamilyService,ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
