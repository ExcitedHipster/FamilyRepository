import { Component, OnInit } from '@angular/core';
import { expense } from 'src/app/Models/Expense';
import { ExpenseService } from 'src/app/Services/expense.service';
import {Router} from'@angular/router';
@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenses:expense [] = [];

  constructor(private _expenseService:ExpenseService,private _router: Router) { }

  ngOnInit(){
      this.expenses = this._expenseService.getExpenses();
  }

  deleteExpense(id){
    this._expenseService.deleteExpense(id);
  }

  updateExpense(id){
    this._router.navigate(['/Update-Expense',id]);
  }

}
