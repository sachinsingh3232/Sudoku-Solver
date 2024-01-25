import React from 'react';
import Grid from './Grid';
import './App.css';

const App = () => {
  const ruleStyle = {
    // "max-width": "380px",
    "color": "black",
    "font-size": "1rem",
    "border-bottom": "10px"
  }
  return (
    <div className='App'>
      <div style={{fontSize:"1.5rem",fontWeight:"600",marginBottom: "5px"}}>Solve Sudoku</div>
      <details style={{ marginBottom: "5px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <summary>Rules</summary>
        <div style={ruleStyle}>• Each row must contain the digits 1-9 without repetition.</div>
        <div style={ruleStyle}>• Each column must contain the digits 1-9 without repetition.</div>
        <div style={ruleStyle}>• Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.</div>
      </details>
      <Grid />
    </div>
  );
};

export default App;

