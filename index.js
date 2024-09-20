// You have to write a Node.js program to clear clutter inside of a directory  and oragnize the contents of that directory into different folders

// for example, this files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. sohan.zip
// 5. rohan.zip
// 6. cat.jpg

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf, pdf/sohan.pdf
// zip/sohan.zip, zip/rohan.zip


// SOLUTION

import fsn from "fs";
import fs from "fs/promises";
import path from "path";


const basePath =
  "D:\\CWH SWD Exercise\\video 85 - Backend\\video 91 - exercise 15";


let files = await fs.readdir(basePath);
// console.log(files);


for (const item of files) {
  let ext = item.split(".")[item.split(".").length - 1];

  if (ext != "js" && ext != "json" && item.split(".").length > 1) {

    if (
      fsn.existsSync(path.join(basePath, ext)) &&
      ext != "js" &&
      ext != "json"
    ) 
    {

      //Move the file to this directory if its not a js or json file
      console.log("running for ",{item})
      fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
    } 
    else 
    {
      fs.mkdir(ext);
    }
  }
}
