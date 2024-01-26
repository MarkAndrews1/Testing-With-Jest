const fs = require('fs')
const axios = require('axios')
const markov = require('./markov')

function createText(text){
    let newText = new markov.MarkovMachine(text)
    console.log(newText.makeText())
}

function makePathText(path){
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
          }else {
            createText(data)
          }
    });
}

async function makeUrlText(url){
    try{
        let res = await axios.get(url)
        createText(res.data)
    } catch(err){
        console.error(`Error:${err}`);
        process.exit(1);
    }
}

let [method, path] = process.argv.slice(2);

if(method === 'file'){
    makePathText(path)
}
if(method === 'url'){
    makeUrlText(path)
}