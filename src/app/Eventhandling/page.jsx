'use client';
import React from 'react'

const Eventhandling = () => {

    const num = 403;
    const addNums= (a,b) => {return a+b}
      return (
    <div className='container'>
        <h1 className='text-center'>Eventhandling </h1>
        <hr />
        <h1></h1>
        <button className='btn btn-primary' onClick={ () => {alert('Button was clicked ')}}>click Me</button>
        <input type="color" onChange={ (e) => { console.log(e.target.value) }}/>
        <input type="color" onChange={ (e) => { document.body.style.background = e.target.value }}/>
    </div>
  )
}


export default Eventhandling
