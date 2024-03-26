// TaskForm.js
import  { useState } from 'react';
import '../App.css';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [priority, setPriority] = useState('P1');
    const [filterBy, setFilterBy] = useState('All'); 
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !title.trim() || !description.trim() || !assignee.trim()) return;
        addTask({ description, assignee, priority });
        setDescription('');
        setAssignee('');
        setPriority('P1');
    };

    return (
        <form onSubmit={handleSubmit} className='task-form'>

            <div className="input-group">
                
                    <label htmlFor="filterBy">Filter by:</label>
                    <select id="filterBy" value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Priority">Priority</option>
                        {/* Add more options if needed */}
                    </select>
                </div>
                
           
           
            <div className="input-group">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
            </select>
            <button type="submit">Add Task</button>
        </div>
        </form>
    );
};

export default TaskForm;
