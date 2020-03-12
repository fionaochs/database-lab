const fs = require('fs').promises;

const mkdirp = path => {
  return fs.mkdir(path, { recursive: true });
};
//make directory with a path and parent upstream directories

const writeJSON = (path, obj) => {
  return fs.writeFile(path, JSON.stringify(obj))
    .then(() => obj);
};
//take in object and stringify it then return that object to be used later

const readJSON = path => {
  return fs.readFile(path)
    .then(contents => JSON.parse(contents));
};
//wait while taking contents from file then parse that info to get the objects contents

const readDirectoryJSON = path => {
  return fs.readdir(path)
    .then(files => {
      return Promise.all(files.map(file => readJSON(`${path}/${file}`)));
    });
};
//wait to get file content from all files
//return array of promises to give us the contents of all files

const updateJSON = (path, obj) => {
  return readJSON(path)
    .then(json => {
      const updatedJSON = { ...json, ...obj };
      //keep everything from original json and add the new obj, update into one object (i.e. update name with new name)
      return writeJSON(path, updatedJSON);
    });
};
//updates data with whatever field is passed for the object, ie just updates age

const deleteFile = path => 
  readJSON(path)
    .then(result => {
      fs.unlink(path);
      return result;
    });
//use correct path to unlink and remove reference
module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
};

