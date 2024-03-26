// TaskForm.js
import  { useState } from 'react';
import '../App.css';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [priority, setPriority] = useState('P1');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim() || !assignee.trim()) return;
        addTask({ title, description, assignee, priority });
        setTitle('');
        setDescription('');
        setAssignee('');
        setPriority('P1');
    };

    return (
        <form onSubmit={handleSubmit} className='container'>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder="Assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
