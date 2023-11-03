import React from 'react';
import { useState } from 'react';

const AddTask = ({onAdd}) => {
  const [text,setText] = useState('')
  const [day,setDay] = useState('')
  const [reminder,setReminder] = useState('')

  const formStyle = {
    background: '#f4f4f4',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '10px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: '5px 0',
  };

  const buttonStyle = {
    background: '#008000',
    color: '#fff',
    border: 'none',
    padding: '7px 10px',
    cursor: 'pointer',
  };

  const blockButtonStyle = {
    display: 'block',
    width: '100%',
  };

  const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
        alert('Please add a task')
        return
    }
    onAdd({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <div>
      <form style={formStyle} className="add-form" 
      onSubmit={onSubmit}>
        <div style={labelStyle} className="form-control">
          <label>Task</label>
          <input type="text" style={inputStyle} placeholder="Task" 
          value={text}
          onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div style={labelStyle} className="form-control">
          <label>Day & Time</label>
          <input type="text" style={inputStyle} placeholder="Add Day & Time"
          value={day}
          onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div style={labelStyle} className="form-control">
          <label>Set Reminder</label>
          <input type="checkbox" 
          checked={reminder}
          value={reminder}
          onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" style={buttonStyle} value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTask;
