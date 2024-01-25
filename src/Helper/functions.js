function isValidSudoku(board) {
    const isValidRow = (row) => {
        const set = new Set();
        for (let i = 0; i < 9; i++) {
            const cell = board[row][i];
            if (cell !== "" && set.has(cell)) {
                return false;
            }
            set.add(cell);
        }
        return true;
    };

    const isValidColumn = (col) => {
        const set = new Set();
        for (let i = 0; i < 9; i++) {
            const cell = board[i][col];
            if (cell !== "" && set.has(cell)) {
                return false;
            }
            set.add(cell);
        }
        return true;
    };

    const isValidSubgrid = (startRow, startCol) => {
        const set = new Set();
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                const cell = board[i][j];
                if (cell !== "" && set.has(cell)) {
                    return false;
                }
                set.add(cell);
            }
        }
        return true;
    };

    for (let i = 0; i < 9; i++) {
        if (!isValidRow(i) || !isValidColumn(i)) {
            return false;
        }
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!isValidSubgrid(i, j)) {
                return false;
            }
        }
    }

    return true;
}
const solveSudoku = (sudokuBoard, setGridValues) => {
    const isEmpty = (row, col) => sudokuBoard[row][col] === '';

    const isValid = (row, col, num) => {
        for (let i = 0; i < 9; i++) {
            if (
                sudokuBoard[row][i] === num ||
                sudokuBoard[i][col] === num ||
                sudokuBoard[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + (i % 3)] === num
            ) {
                return false;
            }
        }
        return true;
    };

    const solve = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (isEmpty(row, col)) {
                    for (let num = '1'; num <= '9'; num++) {
                        if (isValid(row, col, num)) {
                            const newBoard = [...sudokuBoard];
                            newBoard[row][col] = num;
                            setGridValues(newBoard);

                            if (solve()) {
                                return true;
                            }

                            const backtrackBoard = [...sudokuBoard];
                            backtrackBoard[row][col] = ''; // backtrack
                            setGridValues(backtrackBoard);
                        }
                    }

                    return false; // no valid number found, backtrack
                }
            }
        }

        return true; // all cells filled
    };

    solve();
};
// export default solveSudoku;
module.exports = { isValidSudoku, solveSudoku }; 
