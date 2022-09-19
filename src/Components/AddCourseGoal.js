import React, { useState } from 'react';
import './AddCourseGoal.css';

const AddCourseGoal = props => {
    const [myGoal, setMyGoal] = useState('');
    const addGoal = (e) => {
        e.preventDefault();
        props.onAddGoal({ text: myGoal, id: `${Math.random()}` });
        setMyGoal('');
    }
    const onGoalEnter = e => {
        setMyGoal(e.target.value);
    }
    return (
        <form onSubmit={addGoal}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" value={myGoal} onChange={onGoalEnter} />
            </div>
            <button className="button" type='Submit'>Add Goal</button>
        </form>

    )
}

export default AddCourseGoal;