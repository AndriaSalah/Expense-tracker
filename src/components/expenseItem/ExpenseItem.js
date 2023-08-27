import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import ExpenseDescirption from "./ExpenseDescription/ExpenseDescirption";
import Card from "../global/Card/Card";

function ExpenseItem(props) {

    return (
        <li>
            <Card className={'expense-item'}>
                <ExpenseDate date={props.date}></ExpenseDate>
                <ExpenseDescirption title={props.title} amount={props.amount}></ExpenseDescirption>
            </Card>
        </li>
    )
}

export default ExpenseItem