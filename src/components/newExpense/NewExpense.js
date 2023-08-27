import ExpenseForm from "./expenseForm/ExpenseForm";
import  "./NewExpense.css"
const NewExpense = (props) =>{
const expenseDataHandler = (expenseData) => {
    const expense = {
        id:Math.random().toString(),
        ...expenseData
    }
    props.onExpenseDataSaved(expense)

}
    return(
        <div className={"new-expense"}>
            <ExpenseForm onSavedExpenseData={expenseDataHandler}></ExpenseForm>
        </div>
    )
}
export default NewExpense