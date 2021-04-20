const fs = require("fs");
const content = `{ "test": "test" }`;
fs.access("./lib", (e) => console.log(e));
try {
  fs.writeFile("test.json", content, (error) => {
    console.log(error);
  });
} catch (error) {}
