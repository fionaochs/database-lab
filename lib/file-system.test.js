const {
  // mkdirp,
  writeJSON,
  // readJSON,
  // readDirectoryJSON,
  // updateJSON,
  // deleteFile
} = require('./file-system.js');

jest.mock('fs', () => ({
  promises: {
    writeFile(path) {
      return Promise.resolve({ path });
    },
    readFile()

  }
}));

describe('file system function', () => {
  it('write a file', () => {
    return writeJSON('./text.js', { text: 'input' })
      .then(result => {
        expect(result)
          .toEqual({ path: './text.js' });
      });
  });
});
