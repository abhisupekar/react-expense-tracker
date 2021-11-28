import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css"

function Expenses(props) {
    console.log(props.data);
    return (
        <Card className="expenses">
            {props.data.map(ele => {
                return <ExpenseItem date={ele.date} title={ele.title} amount={ele.amount} />
            })}

        </Card>
    );
}

export default Expenses;