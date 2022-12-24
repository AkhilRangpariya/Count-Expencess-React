// import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    return (
        <Card className="expense-item">

            {/* take a smaller component for more use ont RYS */}
            <ExpenseDate date={props.date} ></ExpenseDate>

            <div className="expense-item__description" >
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;