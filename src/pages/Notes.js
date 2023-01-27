import React from "react";
import Node_Global from "../img/Node_Global.jpg";
import Node_EventLoop from "../img/Node_EventLoop.jpg";
import HTTP from "../img/HTTP.jpg";
import Node_App from '../img/Node_App.jpg'
import Exp_App from '../img/Exp_App.jpg'

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
            <img src = {HTTP} alt = ""></img>
            <h3>Accessing HTTP</h3>
            <p>Syntax : "const http = require('http')</p>
            <h3>Creating Server</h3>
            <p>const server = http.createServer((req,res) => (FUNC_BODY))
                <br></br>
                In FUNC_BODY, we set up our business logic based on client Request (req) and we provide Responses via (res)
            </p>
            <h4>Basic Request Message</h4>
            <p>We may use ".method" to check the client actions
                <br></br>
                We may use ".url" to check the resources location that client refering to
            </p>
            <h4>Basic Response Message</h4>
            <p>
                1. Indicating Status Code and Return Message Type : "res.writeHead(STATUS_CODE, MIME_TYPE)"
                <br></br>
                2. Indicating Return Content : "res.write(CONTENT)"
                <br></br>
                3. Signal the end of response : "res.end()"
            </p>
            <h3>Setting Portal for our server</h3>
            <p>Syntax : "server.listen(PORTAL_NUMBER)
                <br></br>
                Note that different portal number refers to different port which is designed in different communication
            </p>
            <h2>Project Management : Package.json</h2>
            <p>Package.json would contain all information about the project</p>
            <h3>Setting up JSON file</h3>
            <p>Syntax : "npm init" (to enter all relevant information)/"npm init -y" (save all information as default)</p>
            <p>Importance of package.json : using npm install would immedidate install all the projects dependencies based on the package.json</p>
            <h2>EventLoop, Async & Promises</h2>
            <h3>EventLoop</h3>
            <p>In general, the loop would offload blocking procedure and execute them later</p>
            <img src = {Node_EventLoop} alt = "" style = {{width : "500px"}}></img>
            <p>
                1. nextTick Queue and microTask Queue : The Highest Priority : (1) nextTick Queue-xxxx.nextTick() (2) microTask Queue-Promise.callback
                <br></br>
                2. Timers : setTimeout() and setInterval()
                <br></br>
                3. Polling : .on('data', callback)
                <br></br>
                4. Check : setImmediate()
            </p>
            <h3>Async & Promises</h3>
            <p>
                One typical type of blocking function : CallBack Chain
                <br></br>
                Async and Promise would deal with the callback chain but developers may use Promises to better manage the chain
                <br></br>
                Promises Syntax : "new Promise((resolve, reject) -> (BODY wrapping target function with resolve(res) and reject(err)))"
                <br></br>
                Promises method "then" allows users to call callback and catch to handle error
                <br></br>
                However, developers would create a wrapper function return promises with allow users to pass in external variables
                <br></br>
                If we would call promise in another function, we would use variable contain the function value with await
            </p>
                <h2>Event Driven Programming : EventEmitter</h2>
                <p>Node JS is also an Event Driven Programming which waiting for specific event and response accordingly
                    <br></br>
                    We would use EventEmitter to manage the Responses
                    <br></br>
                    1. To access to EventEmitter : const EventEmitter = require("event") (which is a class)
                    <br></br>
                    2. To customize the Event Response : const customerEventEmitter = new EventEmitter()
                    <br></br>
                    3. To set the target event and callbacks : customerEventEmitter.on(TARGET, (callback) (ARGUMENTS) => (BODY))
                    <br></br>
                    4. To receive request : customerEventEmitter.emit(EVENT)
                </p>
                <p>Note that the object from HTTP modules extend from EventEmitter and the createServer object has "on" method would listen event</p>
                <h2>Streams</h2>
                <p>It is under 'fs' module and it has similar functions as read and write but it is used to deal to large set of data</p>
                <h2>Express</h2>
                <p>It is a framework applied on node js</p>
                <p>If we want to render web based on client requests</p>
                <h3>Without Express</h3>
                <img src = {Node_App} alt = ""></img>
                <p>We have to tackle all the reference request one by one</p>
                <h3>With Expree</h3>
                <img src = {Exp_App} alt = ""></img>
                <p>We can handle all the reference request (or static resource requrest in general) in one line
                    <br></br>
                    Syntax : "express().use(express.static(STATIC_RESOURCE_PATH)"
                </p>

        </div>

    );
};

export default Notes;