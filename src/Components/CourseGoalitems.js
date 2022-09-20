import React from "react";
import style from './CourseGoalitems.module.css'

const CourseGoalItem = props => {
    const goalDelete = () => {
        props.onDelete(props.id)
    }
    return (
        <li className={`${style['goal-item']}`} onClick={goalDelete}>
            {props.children}
        </li>
    )
}
export default CourseGoalItem;