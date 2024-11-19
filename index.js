const path = require("path");
const fs = require("fs");

for (let i = 1; i <=3; i++) {
  let dirPathToMake = `Files${i}`;
  const destPath = path.join(__dirname, "src");
  fs.mkdirSync(path.join(destPath, dirPathToMake));
  fs.writeFileSync(
    path.join(path.join(destPath, dirPathToMake), "read.md"),
    `Text file mainintained ${i}`
  );
}
