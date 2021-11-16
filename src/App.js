
import { useState } from 'react';
import { nanoid } from 'nanoid'

const initialTableData2 = [
    {id: nanoid(), cols: [ {id: nanoid()}, {id: nanoid()} ] },
    {id: nanoid(), cols: [ {id: nanoid()}, {id: nanoid()} ] },
    {id: nanoid(), cols: [ {id: nanoid()}, {id: nanoid()} ] }
]


function App() {
    const [columns, setColumns] = useState(2)
    const [rows, setRows] = useState(3)

    const [tableData, setTableData] = useState(initialTableData2)

    const generateTableData = (c, r) => {
        const table = [];
        for(let row = 1; row <= r; row++){
            const tempRow = [];
            for(let col = 1; col <= c; col++){
                tempRow.push({ id: nanoid()})
            }
            table.push({ id: nanoid(), cols: tempRow })
        }

        setTableData(table)
    };

    const minusColumns = () => {
        if(columns > 1) setColumns(columns - 1)
        generateTableData(columns - 1, rows)
    };

    const plusColumns = () => {
        setColumns(columns + 1)
        generateTableData(columns + 1, rows)
    };

    const minusRows = () => {
        if(rows > 1) setRows(rows - 1)
        generateTableData(columns, rows - 1)
    };

    const plusRows = () => {
        setRows(rows + 1)
        generateTableData(columns, rows +1)
    };


    return (
        <div className="App">
            <button onClick={minusRows}>Minus row</button>
            {rows}
            <button onClick={plusRows}>Minus row</button>

            <hr/>

            <button onClick={minusColumns}>Minus col</button>
            {columns}
            <button onClick={plusColumns}>Minus col</button>

            <hr/>


            <table border={1}>
                <tbody>

                {tableData.map((row) => <tr key={row.id}>
                    {row.cols.map(col => <td key={col.id}>*</td>)}
                </tr>)}

                </tbody>
            </table>

        </div>
    );
}

export default App
