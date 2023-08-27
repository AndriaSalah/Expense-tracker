import ExpenseItem from "../expenseItem/ExpenseItem";
import './ExpenseList.css'
function ExpenseList (props) {

    return(
       <ul className={'expenses-list'}>
           { props.expenseList.length > 0 ?
                props.expenseList.map(expense => (
                    <ExpenseItem
                        key = {expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>)
                ) : props.filter === "none" ? <h2 className={'expenses-list__fallback'}>You can start by adding an expense by pressing
           the add expense button </h2> : <h2 className={'expenses-list__fallback'}> There is no expenses saved in this month  </h2>
           }
       </ul>

)

}
export default ExpenseList
