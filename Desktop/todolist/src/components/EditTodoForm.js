import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task,}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
      e.preventDefault();
      // edit todo
      editTodo(value, task.id);
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={value}
       placeholder='Update Task'
       onChange={(e)=> setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
