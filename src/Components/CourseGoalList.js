import React from "react";
import CourseGoalItem from "./CourseGoalitems";
import './CourseGoalList.css';

const CourseGoalList = props => {
    return (
        <ul className="goal-list">
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