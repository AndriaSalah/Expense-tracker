import "./ExpenseForm.css"
import {useState} from "react";

const ExpenseForm = (props) => {
    const [titleChange, setTitleChanged] = useState("")
    const [amountChange, setAmountChanged] = useState("")
    const [dateChange, setDateChanged] = useState("")
    const titleChangeHandler = event => setTitleChanged(event.target.value)
    const amountChangeHandler = event => setAmountChanged(event.target.value)
    const dateChangeHandler = event => setDateChanged(event.target.value)

    const [showForm, setShowFrom] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: titleChange,
            amount: +amountChange,
            date: new Date(dateChange)
        }
        props.onSavedExpenseData(expenseData)
        setTitleChanged("")
        setAmountChanged("")
        setDateChanged("")
        showFormHandler()
    }
    const showFormHandler = () => showForm ? setShowFrom(false) : setShowFrom(true)


    if (showForm) {
        return (
            <form onSubmit={submitHandler}>
                <div className={"new-expense__controls"}>
                    <div className={"new-expense__control"}>
                        <label>Title</label>
                        <input type={"text"} onChange={titleChangeHandler} value={titleChange}/>
                    </div>
                    <div className={"new-expense__control"}>
                        <label>Amount</label>
                        <input type={"number"} min={0.01} step={0.01} onChange={amountChangeHandler}
                               value={amountChange}/>
                    </div>
                    <div className={"new-expense__control"}>
                        <label>Date</label>
                        <input type='date' min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler}
                               value={dateChange}/>
                    </div>
                </div>
                <div className={"new-expense__actions"}>
                    <button type={"submit"}>Add expense</button>
                    <button onClick={showFormHandler}>Cancel</button>
                </div>
            </form>
        )
    } else {
        return (
            <form onSubmit={submitHandler}>
                <div className={"new-expense__actions__hidden"}>
                    <button onClick={showFormHandler}>Add expense</button>
                </div>
            </form>
        )
    }
}

export default ExpenseForm