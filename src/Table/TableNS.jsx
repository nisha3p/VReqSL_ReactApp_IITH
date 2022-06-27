import React, { useState } from "react";
import async from "hbs/lib/async";
import TableRows from "./TableRows"
import "./table.css"
import { useEffect } from "react";

var axios = require('axios');
var data = '';


function TableNS() {
    const [rowsData, setRowsData] = useState([]);
    var row_index = -1;
    const [rowInd, setId] = useState(-1);

    const addTableRows = () => {

        const rowsInput = {
            project: '',
            owner: '',
            stage: '',
            id: ''
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

    function populateRow(userProjObj) {
        var userProj = userProjObj.projects;
        var allData = [];

        console.log("population started")
        userProj.map((proj) => {
            console.log("Project Name : " + proj.project)
            console.log("Project Owner : " + proj.owner)

            const rowsInput = {
                project: proj.project,
                owner: proj.owner,
                stage: proj.stage,
                id: proj._id
            }

            allData.push(rowsInput)
        })

        console.log("All data")
        console.log(allData)

        setId(allData.length - 1)
        setRowsData(allData)
    }

    var config = {
        method: 'get',
        url: 'http://localhost:3000/home',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'jwttoken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI3NThjODIxZjQ2MjBhN2M0MzVkZDkiLCJpYXQiOjE2NTYyNDAxMTd9.bp703CgfOZbcK0eGrtQ89RafOXSk6NOjFFYiJGYcjyI'
        },
        data: data
    };

    useEffect(() => {
        axios(config)
            .then(function (response) {
                // console.log(response.data);
                // console.log(typeof response.data)
                // console.log(typeof rowsData)
                populateRow(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th class="hide-col-id">ID</th>
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