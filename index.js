const fs = require("fs");

//blocking, synchronus code

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textout = `This is what we know about the ovacado: ${textIn}`;
fs.writeFileSync("./txt/output.txt", textout);

//Non blocking asynchronus code

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);

    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("File has been written");
      });
    });
  });
});
