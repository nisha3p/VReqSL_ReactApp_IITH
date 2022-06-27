import React, { useEffect } from "react";
import JSONEditor from "jsoneditor";
import "./jsoneditor.css";
import { projId, isSceneErr, setErrorState } from "../ValidUser";
var axios = require('axios');


export default function JsonEditor() {

    var editor;
    var editorVal;
    var reqData;

    var config = {
        method: 'get',
        // url: 'http://localhost:3000/home/scene/62b87670b6348c14b80bd5cf',
        url: `http://localhost:3000/home/scene/${projId}`,
        headers: {
            'Cookie': 'jwttoken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI3NThjODIxZjQ2MjBhN2M0MzVkZDkiLCJpYXQiOjE2NTYyNDAxMTd9.bp703CgfOZbcK0eGrtQ89RafOXSk6NOjFFYiJGYcjyI'
        }
    };

    useEffect(() => {
        axios(config)
            .then(function (response) {
                console.log(response.data);
                reqData = response.data
                console.log(reqData)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    function showEditor() {
        const container = document.getElementById("jsoneditor");

        const options = {
            // mode: "view",
            mode: 'tree'
        };

        const json = reqData.data;
        console.log("Request Data = " + json)

        editor = new JSONEditor(container, options, json);
        return editor;
    }

    function validate() {

        const json = editor.get();

        const schema = reqData.schema;


        const options = {
            schema: schema,
            mode: 'tree',
            modes: ['code', 'text', 'tree', 'preview'],
            onValidationError: function (errors) {
                if (errors.length == 0) {
                    console.log("No Error Present")
                    setErrorState(true)
                }

                errors.forEach((error) => {
                    switch (error.type) {
                        case 'validation': setErrorState(false)
                            console.log(isSceneErr)
                            break;

                        default: setErrorState(true)
                            console.log(isSceneErr)
                    }
                });


            }
        }


        document.getElementById('jsoneditor-validate').innerHTML = "";
        // create the editor
        const container = document.getElementById('jsoneditor-validate')
        editorVal = new JSONEditor(container, options, json)

        return editorVal;
    }

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "3%",
                }}
            >
                <button onClick={showEditor}>Show field</button>
                <button onClick={validate}>Validate JSON</button>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "3%",
                }}
            >
                <div id="jsoneditor"></div>
                <div id="jsoneditor-validate" style={{ width: "35%" }}></div>
            </div>
        </div>
    );
}

