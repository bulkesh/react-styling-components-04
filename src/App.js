
import style from './App.module.css';
import React, { useState } from 'react';
import CourseGoalList from './Components/CourseGoalList';
import AddCourseGoal from './Components/AddCourseGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercise!!', id: 'c1' },
    { text: 'Finish the course!!', id: 'c2' },
  ])

  const goalRemoveHandler = goalId => {
    console.log(goalId);
    setCourseGoals(previousGoals => {
      return previousGoals.filter(goal => goal.id !== goalId);
    })
  }

  const addGoalHandler = (goal) => {
    setCourseGoals([goal, ...courseGoals])
  }

  let goalDisplay =   <p style={{ textAlign: 'center' }}>No Goals to display!!</p>
  if(courseGoals.length > 0) {
      goalDisplay = (<CourseGoalList goalList={courseGoals} onGolalRemove={goalRemoveHandler} />)
  }
  return (
    <div >
      <section id="goal-form" className={`${style['goal-form']}`}>
        <AddCourseGoal onAddGoal={addGoalHandler} />
      </section>

      <section  id="goals" className={`${style.goals}`}>
        {goalDisplay}
      </section>
    </div>
  );
}

export default App;
