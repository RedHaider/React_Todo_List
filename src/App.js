import Header from './components/Header'
import Task from './components/Task';
import AddTask from './components/AddTask';
import { useState } from "react"
import './App.css';
function App(){
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
     {
        id: 2,
        text: 'Grocery Shopping',
        day: 'Feb 10th at 4:00pm',
        reminder: false,
    },
    
     {
        id: 3,
        text: 'Gym Workout',
        day: 'Feb 15th at 9:00am',
        reminder: true,
    },
    
  ])

// Add Task
 const addTask = (task) => {
    const id= Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])
 }

//Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

// Toggle Reminder
  const toggleReminder = (id) => {
     setTasks(
     tasks.map((task)=>
     task.id === id ? {...task, reminder:
    !task.reminder}:task
     )
     )
  }

  return (
    <div className="App">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? (
        <Task tasks={tasks} 
        onDelete = {deleteTask} 
        onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      ) 
        }
    </div>
  );
}



export default App;
