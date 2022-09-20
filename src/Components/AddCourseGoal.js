import React, { useState } from 'react';
import style from './AddCourseGoal.module.css';

const AddCourseGoal = props => {
    const [myGoal, setMyGoal] = useState('');
    const [isGoalEntered, setIsGoalEntered] = useState(true);
    const addGoal = (e) => {
        e.preventDefault();
        if (myGoal.trim().length === 0) {
            setIsGoalEntered(false);
            return;
        }
        props.onAddGoal({ text: myGoal, id: `${Math.random()}` });
        setMyGoal('');
    }
    const onGoalEnter = e => {
        setMyGoal(e.target.value);
        if (e.target.value.trim().length > 0) {
            setIsGoalEntered(true);
        }
    }
    return (
        <form onSubmit={addGoal} className={`${style['form-control']} ${!isGoalEntered && style.invalid}`}>
            <div>
                <label>Course Goal</label>
                <input type="text" value={myGoal} onChange={onGoalEnter} />
            </div>
            <button className={`${style.button}`} type='Submit'>Add Goal</button>
        </form>

    )
}

export default AddCourseGoal;