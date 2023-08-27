import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import {useEffect, useState} from "react";



function json_deserialize_helper(key,value) {
    if ( typeof value === 'string' ) {
        var regexp;
        regexp = /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.exec(value);
        if ( regexp ) {
            return new Date(value);
        }
    }
    return value;
}

let prevSession = JSON.parse(localStorage.getItem(`previousExpenses`),json_deserialize_helper)
if(!prevSession) prevSession = []
function App() {

    const [expenses, setExpenses] = useState(prevSession)

    const newExpenseDataHandler = (expenseData) => {
        setExpenses((prevExpenses) => {
            return ([expenseData, ...prevExpenses])
        })
        console.log(expenses )
    }
    useEffect(() => {
            if(expenses.length !==0) {
                console.log(expenses)
                window.localStorage.setItem("previousExpenses",JSON.stringify(expenses))
            }


    }, [expenses]);
    return (
        <div>
            <NewExpense onExpenseDataSaved={newExpenseDataHandler}></NewExpense>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
