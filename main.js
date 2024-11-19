#!/usr/bin/env node

const { helpFn } = require("./commands/help");
const { treeFn } = require("./commands/tree");
const { organizeFn } = require("./commands/organize");

const inputArr = process.argv.splice(2);

// process.argv takes input from command line and then separates it into array format.

// The first element will be process.execPath.
// The second element will be the path to the JavaScript file being executed.
// The remaining elements will be any additional command-line arguments.

//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help

const types = {
  media: ["mp4", "mkv"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

let command = inputArr[0];
switch (command) {
  case "tree":
    treeFn(inputArr[1]);
    break;
  case "organize":
    organizeFn(inputArr[1]);
    break;
  case "help":
    helpFn();
    break;
  default:
    console.log("Please 🙏 Input right command");
    break;
}
