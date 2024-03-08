'use client'
import React, { useState } from 'react'

const todolist = () => {
    const [taskList, setTaskList] = useState([
        { text : 'do coding', compiled : false },
        { text : 'play games', compiled : false },
        { text : 'bring milk', compiled : false },
    ]);
    
     const addTask = (e) => {
        console.log(e.key);
    }
    return (
        <div className='bg-primary-danger-subtle vh-100'>
            <div className='container py-5'>
            <h1 className='display-3 fw-bold text-center'>todolist</h1>
            <div className='card shadow'>
                <div className='card-header'> <input type="text" className='form-control border-primary border-3' onkeyDown={addTask} /></div>
                <div className='card-body'></div>
            </div>
            </div>
        </div>
    )
}

export default todolist