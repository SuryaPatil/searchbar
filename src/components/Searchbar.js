import React from 'react'
import { useState } from 'react';


const Searchbar = () => {


  const [input, setInput] = useState('')
  const[output, setOutput] = useState(''); 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    setOutput(input)
    return (
      <p >
        {input}
      </p>
    );
  }

  return (
    <div className='bar' style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
      <form className='form' onSubmit={handleSubmit} 
      style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div className='form-row'>
          
          <input
            type='text'
            className='form-input'
            id='input'
            style={{display: 'flex', width: 400}}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span>           </span>
          <button type='submit' className='btn' onClick={handleSubmit}>
          Search
        </button>
        </div>
      </form>
      <div>
      <p style={{display: 'flex',  justifyContent:'center', alignItems:'center',  color: 'white',}}>
        {output}
      </p>
      </div>
    </div>  
  );
}

export default Searchbar