import React from "react";
import "./table.css";
import {NavLink} from "react-router-dom"

export default function Table() {
	return (
		<div>
			<table class="table">
				<thead class="thead-dark">
					<tr>
						<th scope="col">S.No.</th>
						<th scope="col">Project Name</th>
						<th scope="col">Owner</th>
						<th scope="col">Stage</th>
                        <th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>VR</td>
						<td>SnehR</td>
						<td>4</td>
                        <td><div>
                            <button class="first-btn">
                                View
                            </button>
                            <NavLink to="/home/scene">
                            <button class="sec-btn">
                                Edit
                            </button>
                            </NavLink>
                            
                        </div></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
