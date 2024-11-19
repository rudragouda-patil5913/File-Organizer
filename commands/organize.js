const fs = require("fs");
const path = require("path");


function organizeFn(dirPath) {
  //   console.log("Organize Command implemented for ", dirPath);
  // 1. input --> directory path given
  let destPath;
  if (dirPath === undefined) {
    destPath = path.join(process.cwd(), "organized_files");
    return;
  } else {
    const doesExistPath = fs.existsSync(dirPath);
    if (doesExistPath) {
      // 2. create --> Create Organized_files --> directory
      destPath = path.join(dirPath, "organized_files");
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
    } else {
      console.log("Please enter the Correct directory path");
      return;
    }
  }
  organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest) {
  const fileNames = fs.readdirSync(src);
  for (let i = 0; i < fileNames.length; i++) {
    let childAddress = path.join(src, fileNames[i]);
    const filename = fs.lstatSync(childAddress);
    if (filename.isFile()) {
      const extNameCategory = generateExt(fileNames[i]);
      sendFiles(childAddress, dest, extNameCategory);
    }
  }
}

function generateExt(name) {
  let extName = path.extname(name);
  extName = extName.slice(1);
  for (let type in types) {
    let cTypeArray = types[type];
    for (let i = 0; i < cTypeArray.length; i++) {
      if (extName === cTypeArray[i]) {
        return type;
      }
    }
  }
  return "others";
}

function sendFiles(src, dest, category) {
  const destPath = path.join(dest, category);
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }
  const fileName = path.basename(src);
  const destPathFile = path.join(destPath, fileName);
  fs.copyFileSync(src, destPathFile);
  fs.unlinkSync(src);
}

module.exports = {
  organizeFn,
};
