#!/usr/bin/env node
// Easymode for parsing a json file

// Using external libs is a great way to integrate more functionality
// into your application with minimal effort.
const fs = require('fs-extra');
let myjson = fs.readJsonSync("package.json")
// This also works
// let myjson = require('package.json')
console.log(myjson.dependencies)

/**
 * If there is no fs-extra package available, you have to do it
 * the old fashion way.
 */

const myOtherJson = JSON.parse(fs.readFileSync("package.json").toLocaleString())
console.log(myOtherJson.dependencies)
