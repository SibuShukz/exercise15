import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath="C:\\Users\\my\\Desktop\\Sigma web dev\\exercise15"

let files= await fs.readdir(basepath)


for (const items of files) {
    console.log("running for ", items)
    let ext = items.split(".")[items.split(".").length - 1]
    if (ext != "js" && ext != "json" && items.split(".").length > 1) {


        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items))
        }
    }

}