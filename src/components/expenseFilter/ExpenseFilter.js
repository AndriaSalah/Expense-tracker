import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const filterHandler = (e)=>{
       props.onDateSelected(e.target.value)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.defaultValue} onChange={filterHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='none'>None</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;