import React from "react";
import { NavLink } from "react-router-dom";
import "./table.css"

function TableRows({ rowsData, deleteTableRows, handleChange }) {
    return (

        rowsData.map((data, index) => {
            const { project, owner, stage } = data;
            return (
                <tr key={index}>
                    <td>
                        <input type="text" value={project} onChange={(evnt) => (handleChange(index, evnt))} name="project" className="form-control" />
                    </td>
                    <td><input type="text" value={owner} onChange={(evnt) => (handleChange(index, evnt))} name="owner" className="form-control" /> </td>
                    <td><input type="text" value={stage} onChange={(evnt) => (handleChange(index, evnt))} name="stage" className="form-control" /> </td>
                    <td>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button class="first-btn"> View</button>
                            <NavLink to="/home/scene">
                                <button class="sec-btn"> Edit</button>
                            </NavLink>
                        </div>
                    </td>
                    <td><button className="btn btn-outline-danger" onClick={() => (deleteTableRows(index))}>x</button></td>
                </tr>
            )
        })

    )

}
export default TableRows;