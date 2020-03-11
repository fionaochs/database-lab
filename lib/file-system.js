const fs = require('fs').promises;

// const mkdirp = () => {

// };
const writeJSON = (path, obj) => {
  return fs.writeFile(path, JSON.stringify(obj), { encoding: 'utf8' });
};
// const readJSON = (path, obj) => {
//   return fs.readFile(path, JSON.parse(obj), { encoding: 'utf8' });
// };
// const readDirectoryJSON = (files, path) => {
//   promise.all(files.map(file => readJSON(${file}/${path}))
// };
// const updateJSON = () => {

// };
// const deleteFile = () => {

// };

module.exports = {
  // mkdirp,
  writeJSON,
  // readJSON,
  // readDirectoryJSON,
  // updateJSON,
  // deleteFile
};

