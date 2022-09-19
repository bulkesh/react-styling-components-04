import React from "react";
import './CourseGoalitems.css'

const CourseGoalItem = props => {
    const goalDelete = () => {
        props.onDelete(props.id)
    }
    return (
        <li className="goal-item" onClick={goalDelete}>
            {props.children}
        </li>
    )
}
export default CourseGoalItem;