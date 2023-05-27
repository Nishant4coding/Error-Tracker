import React, { useState } from 'react';
import ReactDiffViewer  from 'react-diff-viewer';
import './App.css'

const CodeComparison = () => {
  const [oldCode, setOldCode] = useState('');
  const [newCode, setNewCode] = useState('');

  const handleOldCodeChange = (event) => {
    setOldCode(event.target.value);
  };

  const handleNewCodeChange = (event) => {
    setNewCode(event.target.value);
  };

  if(oldCode==='' && newCode==='' ){
    var value='Enter your code to compare'
  }
  else if(oldCode===newCode){
     value='No Error found'
  }
  else if(oldCode!==newCode){
    value='Errors!'
  }

  return (
    <div className='container'>
      <h1>Find Your Errors!</h1>
      <div className='content'>
      <div className='text-area'>
        <h2>Old Code</h2>
        <textarea value={oldCode} onChange={handleOldCodeChange} />
      </div>
      <div className='text-area'>
        <h2>New Code</h2>
        <textarea value={newCode} onChange={handleNewCodeChange} />
      </div>
      </div>
      <div className='Errors'>
        <h2>{value}</h2>
        <ReactDiffViewer className='result' oldValue={oldCode} newValue={newCode} splitView={true} />
      </div>
      <footer>
        <p>All right reserved @ Nishant Srivastava</p>
      </footer>
    </div>
  );
};

export default CodeComparison;
