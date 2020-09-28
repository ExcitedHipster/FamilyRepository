import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FamilyListComponent} from './Family/list/list.component';
import {HomeComponent} from './Family/home/home.component';
import {UpdateComponent} from './Family/update/update.component';
import { AddComponent } from './Family/add/add.component';
import {PeopleUpdateComponent} from './People/update/update.component';
import {PeopleListComponent} from './People/people-list/people-list.component';
import {PersonAddComponent} from './People/add/add.component';
import {PersonDetailsComponent} from './People/person-details/person-details.component';
import {MemberAddComponent} from './CompleteFamily/member-add/member-add.component';
import { ExpenseListComponent } from './Expenses/expense-list/expense-list.component';
import {ExpenseAddComponent} from './Expenses/expense-add/expense-add.component';
const routes: Routes = [
  {path:'Family-List',component: FamilyListComponent},
  {path: 'Home/:id', component: HomeComponent},
  {path: 'updateFamily/:id', component: UpdateComponent},
  {path: 'addFamily', component: AddComponent},
  {path: 'updatePerson/:id', component: PeopleUpdateComponent},
  {path: 'addPerson', component: PersonAddComponent},
  {path: 'People-List', component: PeopleListComponent},
  {path: 'Person-Details/:id',component:PersonDetailsComponent},
  {path: 'Member-Add',component:MemberAddComponent},
  {path: 'Expense-Add',component:ExpenseAddComponent},
  {path: 'Expense-List',component:ExpenseListComponent},
  { path: '',   redirectTo: '/Family-List', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
