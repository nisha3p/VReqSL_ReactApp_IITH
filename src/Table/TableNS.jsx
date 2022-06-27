import React, { useState } from "react";
import async from "hbs/lib/async";
import TableRows from "./TableRows"
import "./table.css"


function TableNS() {
    const [rowsData, setRowsData] = useState([]);
    var row_index = -1;
    const [rowInd, setId] = useState(-1);

    const addTableRows = () => {

        const rowsInput = {
            project: '',
            owner: '',
            stage: ''
        }
        row_index++;
        setId(rowInd + 1)
        console.log("row_index = " + rowInd)
        setRowsData([...rowsData, rowsInput])

        // row_index++
        // setId(rowInd + 1)


    }
    const deleteTableRows = (index) => {
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
    }
    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);



    }


    // const PostData = async (evnt) => {

    //     evnt.preventDefault();
    //     const { project, owner, stage } = rowsData[0];

    //     console.log(rowsData[0])
    //     const res = await fetch("/home", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         credentials: "include",
    //         body: JSON.stringify({
    //             project, owner, stage
    //         })
    //     })

    // }


    // const data = await res.json();

    // if ((data.status === 422 || !data)) {
    //     window.alert("Invalid Credentials")
    //     console.log("galat")
    // }
    // else {
    //     window.alert("Registration Successful")
    //     navigate("/home")
    //}

    //}
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Owner</th>
                                <th>Stage</th>
                                <th>Action</th>
                                <th></th>
                                <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRows rowInd={rowInd} rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}

export default TableNS;