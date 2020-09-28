import { Injectable } from '@angular/core';
import { expense } from '../Models/Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expenses:expense[]=[];

  constructor() { }

  expenseAdd(Expense){
    if(this.expenses.length==0) Expense.id=0;
    else Expense.id=this.getMaxId();
    this.expenses.push(Expense);
  }

  getExpenses(){
     return this.expenses;
  }

  getExpense(id){
    return this.expenses.find(x=>x.id==id);
  }

  deleteExpense(id){
    let expense=this.getExpense(id);
    let index = this.expenses.indexOf(expense);
    this.expenses.splice(index,1);
  }

  getMaxId(){
    let ans;
  
    for (let index = 0; index < this.expenses.length; index++) {
       ans = this.expenses[index];
    }
     return ans.id+1;
  }
}
