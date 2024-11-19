const fs = require("fs");
const path = require("path");


function treeFn(dirPath) {
  if (dirPath === undefined) {
    treeHelper(process.cwd(), " ");
    return;
  } else {
    const doesExistPath = fs.existsSync(dirPath);
    if (!doesExistPath) {
      console.log("Please enter the correct directory path");
    } else {
      treeHelper(dirPath, " ");
    }
  }
}

function treeHelper(dirPath, indent) {
  const fileNames = fs.readdirSync(dirPath);
  console.log(dirPath + "\t");
  for (let i = 0; i < fileNames.length; i++) {
    let childFile = path.join(dirPath, fileNames[i]);
    let isFile = fs.lstatSync(childFile).isFile();
    if (isFile) {
      let fileName = path.basename(childFile);
      console.log(indent  + "|---" + fileName);
    } else {
      treeHelper(childFile, indent + "\t");
    }
  }
}

module.exports = { treeFn };
