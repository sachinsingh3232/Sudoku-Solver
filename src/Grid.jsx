import React, { useState } from 'react';
import { isValidSudoku, solveSudoku } from './Helper/functions';
const Grid = () => {
    // State to store the values of each input
    const [gridValues, setGridValues] = useState(Array(9).fill(Array(9).fill('')));
    const [valid, setValid] = useState(true);
    // Function to handle input changes
    const handleInputChange = (rowIndex, colIndex, value) => {
        const newGridValues = gridValues.map((row, i) =>
            row.map((cell, j) => (i === rowIndex && j === colIndex ? value : cell))
        );
        setGridValues(newGridValues);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        let empty = true;
        for (let i = 0; i < gridValues.length; i++) {
            for (let j = 0; j < gridValues[0].length; j++) {
                if (gridValues[i][j] !== '') {
                    empty = false;
                    break;
                }
            }
        }
        if (empty) {
            alert("Please Enter some Values!");
            return;
        }
        if (isValidSudoku(gridValues)) {
            setValid(true)
            solveSudoku(gridValues, setGridValues);
        } else {
            setValid(false);
        }
    }
    const resetHandler = (e) => {
        e.preventDefault();
        setValid(true)
        setGridValues(Array(9).fill(Array(9).fill('')));
    }

    return (
        <div style={{width:"405px"}}>
            {!valid && <h3 style={{ color: "red" }}>Invalid Input</h3>}
            <div style={{width:"100%", border: "3px solid black", borderRadius: "5px" }}>
                {gridValues.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', borderBottom: rowIndex % 3 === 2 && rowIndex !== 8 ? '3px solid black' : 'none' }}>
                        {row.map((value, colIndex) => (
                            <input
                                key={colIndex}
                                type="text"
                                value={value}
                                onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                                style={{
                                    width: '33px',
                                    height: '33px',
                                    margin: '2px',
                                    textAlign: 'center',
                                    backgroundColor:"#d93939",
                                    fontSize:"1rem",
                                    fontWeight:"600"
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div style={{ marginTop: "5px", padding: "0px 10px", display: "flex", justifyContent: "space-between" }}>
                <button onClick={resetHandler} style={{ backgroundColor: "white", padding: "5px", color: "red", borderRadius: "5px" }}>Reset</button>
                <button onClick={submitHandler} style={{ backgroundColor: "white", padding: "5px", color: "red", borderRadius: "5px" }}>Submit</button>
            </div>
        </div>
    );
};

export default Grid;
