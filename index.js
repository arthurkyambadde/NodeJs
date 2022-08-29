const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textout = `This is what we know about the ovacado: ${textIn}`;
fs.writeFileSync("./txt/output.txt", textout);
