import React, { useState } from 'react';
import '../App.css';

const TaskList = ({ tasks, deleteTask }) => {
    const [assigneeFilter, setAssigneeFilter] = useState('all'); // Assignee filter state
    const [priorityFilter, setPriorityFilter] = useState('all'); // Priority filter state
    const [sortBy, setSortBy] = useState('startDate'); // Sort state
    const [sortOrder, setSortOrder] = useState('asc'); // Sort order state

    // Sort tasks based on selected criteria
    const sortedTasks = tasks.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortBy] - b[sortBy];
        } else {
            return b[sortBy] - a[sortBy];
        }
    });

    // Filter tasks based on assignee and priority
    const filteredTasks = sortedTasks.filter(task => {
        if (assigneeFilter !== 'all' && task.assignee !== assigneeFilter) {
            return false;
        }
        if (priorityFilter !== 'all' && task.priority !== priorityFilter) {
            return false;
        }
        return true;
    });

    // Get unique assignees for dropdown
    const uniqueAssignees = [...new Set(tasks.map(task => task.assignee))];
    // Get unique priorities for dropdown
    const uniquePriorities = [...new Set(tasks.map(task => task.priority))];

    // Group tasks by status
    const groupedTasks = filteredTasks.reduce((acc, task) => {
        if (!acc[task.status]) {
            acc[task.status] = [];
        }
        acc[task.status].push(task);
        return acc;
    }, {});

    return (
        <div>
            <div>
                <label>Sort by:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="startDate">Start Date</option>
                    <option value="endDate">End Date</option>
                    <option value="priority">Priority</option>
                </select>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <div className='container'>
                {/* Render tasks in separate containers based on their status */}
                {Object.entries(groupedTasks).map(([status, tasksInSection]) => (
                    < div key={status} className={`task-section ${status.toLowerCase().replace(" ", "-")}`}>
                    <div className='tasks'>
                    
                    
                        
                     </div>
                        <h2>{status}</h2>
                        {tasksInSection.map(task => (
                            <div key={task.id} className="task-container">
                                <h3>{task.title}</h3>
                                <p>Description: {task.description}</p>
                                <p>Assignee: {task.assignee}</p>
                                <p>Priority: {task.priority}</p>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>

                        ))}
                    
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
