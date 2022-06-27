import React from "react";
import { NavLink } from "react-router-dom";
import "./table.css"
import { useNavigate } from "react-router-dom";
import { projId, setProjId } from "../ValidUser";

function TableRows({ rowInd, rowsData, deleteTableRows, handleChange }) {
    let navigate = useNavigate()

    const PostData = async (evnt) => {

        evnt.preventDefault();
        const { project, owner, stage, id } = rowsData[rowInd];

        console.log("Row Index " + rowInd)
        console.log(rowsData[rowInd])
        console.log(rowsData)

        const res = await fetch("/home", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                project, owner, stage
            })
        })

    }

    function moveForward() {
        // setProjId(id)
        console.log("Row Id Proj = " + rowsData[rowInd].id)
        setProjId(rowsData[rowInd].id)
        console.log("Project Id = " + projId)
        navigate("/home/scene")
    }

    return (

        rowsData.map((data, index) => {
            const { project, owner, stage, id } = data;
            return (
                <tr key={index}>
                    <td class="hide-col-id">{id}</td>
                    <td>
                        <input type="text" value={project} onChange={(evnt) => (handleChange(index, evnt))} name="project" className="form-control" />
                    </td>
                    <td><input type="text" value={owner} onChange={(evnt) => (handleChange(index, evnt))} name="owner" className="form-control" /> </td>
                    <td><input type="text" value={stage} onChange={(evnt) => (handleChange(index, evnt))} name="stage" className="form-control" /> </td>
                    <td>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button class="first-btn"> View</button>
                            {/* <NavLink to="/home/scene"> */}
                            <button class="sec-btn" onClick={moveForward}> Edit</button>
                            {/* </NavLink> */}
                        </div>
                    </td>
                    <td ><button class="first-btn" style={{ backgroundColor: "green", color: "white" }} onClick={PostData}>Save</button></td>
                    <td><button className="btn btn-outline-danger" onClick={() => (deleteTableRows(index))}>x</button></td>
                </tr>
            )
        })

    )

}
export default TableRows;