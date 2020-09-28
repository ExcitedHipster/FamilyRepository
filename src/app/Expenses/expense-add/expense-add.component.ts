import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/Services/expense.service';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  constructor(private _expenseService:ExpenseService) { }

  ngOnInit(){
  }

  addExpense(expense){
    this._expenseService.expenseAdd(expense);
  }
}
