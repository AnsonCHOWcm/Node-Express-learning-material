import React from "react";
import Node_Global from "../img/Node_Global.jpg";

const Notes = () => {
    return (
        <div style = {{padding : "10px", marginTop : "0"}}>
            <h1>Node Js</h1>
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
            <h2>Bulti-in Module : OS</h2>
            <p>Syntax : const os = require("os")
                <br></br>
                This is a module allowing developers to communicate with the Operating System
            </p>
            <h2>Bulti-in Module : path</h2>
            <p>Syntax : const path = require("path")
                <br></br>
                This is a module allowing developers to interact with the file locations/paths
            </p>
            <h2>Bulti-in Module : FileSystem</h2>
            <p>Syntax : const fs = require('fs')
                <br></br>
                This is module allowing developers to interact with file system
                <br></br>
                There are two main functions : readFile and writeFile
                <br></br>
                For each function, there are two versions : sync and async
                <br></br>
                readFile Syntax : "readFile" (async) or "readFileSync" (sync)
                <br></br>
                writeFile Syntax : "writeFile" (async) or "writeFileSync" (sync)
                <br></br>
                For the async function : developers can pass callback function after the original function executed
            </p>
            <h2>Built-in Module : HTTP</h2>
            <p>This module allow us to set up our own server</p>
            <h3>Accessing HTTP</h3>
            <p>Syntax : "const http = require('http')</p>
            <h3>Creating Server</h3>
            <p>const server = http.createServer((req,res) => (FUNC_BODY))
                <br></br>
                In FUNC_BODY, we set up our business logic based on client Request (req) and we provide Responses via (res)
            </p>
            <h3>Setting Portal for our server</h3>
            <p>Syntax : "server.listen(PORTAL_NUMBER)</p>
            <h2>Project Management : Package.json</h2>
            <p>Package.json would contain all information about the project</p>
            <h3>Setting up JSON file</h3>
            <p>Syntax : "npm init" (to enter all relevant information)/"npm init -y" (save all information as default)</p>
            <p>Importance of package.json : using npm install would immedidate install all the projects dependencies based on the package.json</p>
        </div>

    );
};

export default Notes;