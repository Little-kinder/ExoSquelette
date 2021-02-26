
function commande(pathJSCadFile, arguments) {    
    const { exec } = require("child_process");
    var command = "openjscad";
    var execLine = `${command} ${pathJSCadFile} ${arguments}`;
    console.log(execLine);
    return new Promise((resolve, reject) => {
        exec(execLine, (error, stdout, stderr) => {
        if (error) {
            console.warn(error);
            reject(error);
        }
        resolve(stdout? stdout : stderr);
        });
    });
}
function getJScadFile (name){
    const path = require('path');
    return path.resolve(`jscadFiles/${name}.jscad`);
}
exports.get3DObject =  async function (type, args) {
    let output = `./stl/${args.id}.stl`;
    delete args.id;
    delete args.type;
    let arguments = "";
    for (const [key, value] of Object.entries(args)) {
        console.log(`${key}: ${value}`);
        arguments += `--${key} "${value}" `;
    }
    arguments += ` -o ${output}`;
    let jscadFilePath = getJScadFile(type);
    await commande(jscadFilePath, arguments);
    // await commande(getJScadFile("name_writehand"), arguments);
}

