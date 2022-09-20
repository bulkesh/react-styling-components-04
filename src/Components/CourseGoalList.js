import React from "react";
import CourseGoalItem from "./CourseGoalitems";
import style from './CourseGoalList.module.css';

const CourseGoalList = props => {
    return (
        <ul className={`${style['goal-list']}`} >
            {props.goalList.map(item => (
                <CourseGoalItem
                    key={item.id}
                    id={item.id}
                    onDelete={props.onGolalRemove}
                >{item.text}</CourseGoalItem>
            ))}
        </ul>

    )
}

export default CourseGoalList;