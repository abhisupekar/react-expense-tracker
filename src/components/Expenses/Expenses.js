import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.data.map(ele => {
                return <ExpenseItem date={ele.date} title={ele.title} amount={ele.amount} />
            })}

        </Card>
    );
}

export default Expenses;