
import Card from "../global/Card/Card";
import "./Expenses.css"
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import {useState} from "react";
import ExpenseList from "../expenseList/ExpenseList";
import ExpensesChart from "../chart/ExpensesChart";
import expenseList from "../expenseList/ExpenseList";
    function Expenses(props) {
        const [filter,setFilter] = useState("none")
        const expenseFilterHandler = (selectedYear)=>{
            setFilter(selectedYear)
            console.log(selectedYear)

        }
        const filteredExpenses = props.expenses.filter((i)=>{
            if(filter === 'none'){
                return i
            }
            else
                return i.date.getFullYear().toString() === filter
        })
        return (
            <Card className="expenses">
                <ExpenseFilter defaultValue={filter} onDateSelected={expenseFilterHandler}></ExpenseFilter>
                {filteredExpenses.length>0 &&
                <ExpensesChart expenseList={filteredExpenses}></ExpensesChart>
                }
                <ExpenseList expenseList={filteredExpenses} filter={filter}></ExpenseList>
            </Card>
        );
    }
export default Expenses