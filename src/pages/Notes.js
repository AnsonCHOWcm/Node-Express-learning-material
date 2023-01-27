import React from "react";
import Node_Global from "../img/Node_Global.jpg";

const Notes = () => {
    return (
        <div style = {{padding : "10px", marginTop : "0"}}>
            <h1>Notes</h1>
            <h2>Node Js</h2>
            <p>It is an environment to run JS outside Browser
                <br></br>
                Therefore, there is no DOM, Window 
                <br></br>
                It is more on server side Js
            </p>
            <h2>Global Variables</h2>
            <img src = {Node_Global} alt = "" style = {{width : "500px"}}></img>
            <p>Node does not have window, DOM to access with. However, it also has some global variables mentioned above</p>
            <h2>Modules</h2>
            <h3>General Concepts</h3>
            <p>In NodeJs, every file is treated as one single module
                <br></br>
                We use the concept of Module to manage the infomration flow between Modules by export and import
            </p>
            <h4>Export</h4>
            <p>To export the information in the local file, we use the sytax : "module.export = OBJECTS contain information"
                <br></br>
                Note that "modlue.export" is JS object
            </p>
            <h4>Import</h4>
            <p>To import the information to the local files, we use syntax : "const VAL = required(MODULE_PATH)"</p>
        </div>

    );
};

export default Notes;