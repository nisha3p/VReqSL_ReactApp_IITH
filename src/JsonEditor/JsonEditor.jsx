import React from "react";
import JSONEditor from "jsoneditor";
import "./jsoneditor.css";

export default function JsonEditor() {
	
  var editor;
  var editorVal;

  function showEditor() {
		const container = document.getElementById("jsoneditor");

		const options = {
			// mode: "view",
      mode: 'tree'
		};

		const json = {
			_scenename: "bowling alley",
			_sid: "AX24C67H",
			_slabel: "This is a text game",
			_scenearea: {
				"#length": "20",
				"#breadth": "20",
				"#height": "20",
			},
			_playarea: {
				"#pid": "TH234OP",
				"#length": "20",
				"#breadth": "5",
				"#height": "10",
			},
			_camera: "true",
			_initialpos: {
				"#x": "0",
				"#y": "5",
				"#z": "0",
			},
			_horizon: "true",
			_dof: "6",
			_skybox: "false",
		};

		editor = new JSONEditor(container, options, json);
		return editor;
	}

  function validate()
  {
  
        const json = editor.get();
        const schema = {
          "title": "Schema",
          "type": "object",
  
          "properties": {
              "_scenename": {
                  "title": "scenename",
                  "req": "mandatory",
                  "type": "string",
                  "%comment%": "Name of the Scene"
              },
  
              "_sid": {
                  "title": "sid",
                  "req": "mandatory",
                  "type": "string",
                  "%comment%": "A fillable Unique Identifier of a Scene to distinguish the scene"
              },
  
              "_slabel": {
                  "title": "slabel",
                  "req": "optional",
                  "type": "string",
                  "%comment%": "A fillable Optional text field for scene description in 50 words"
              },
  
              "_playarea": {
                  "title": "playarea",
                  "req": "mandatory",
                  "type": "object",
                  "%comment%": "defines the boundaries of the virtual play area where articles and scene users interact with length, breadth, height ending up in a cube or cuboid. The size of playarea should be less than scenearea.",
  
                  "properties": {
                      "#pid": {
                          "title": "#pid",
                          "description": "The family name.",
                          "type": "string"
                      },
                      "#length": {
                          "title": "#length",
                          "description": "The family name.",
                          "type": "integer"
                      },
                      "#breadth": {
                          "title": "#breadth",
                          "description": "The family name.",
                          "type": "integer"
                      },
                      "#height": {
                          "title": "#height",
                          "description": "The family name.",
                          "type": "integer"
                      }
                  }
              },
        
        "_audio":{
            "req":"mandatory",
            "type":"boolean",
            "%comment%":"true for spatial audio, false for no spatial audio"
         }
      },
  
          "required": ["_scenename", "_sid", "_slabel"]
     }
        
  
        const options = {
            schema: schema,
            mode: 'tree',
            modes: ['code', 'text', 'tree', 'preview']
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
				<div id="jsoneditor-validate" style={{width:"35%"}}></div>
			</div>
		</div>
	);
}

