const fileSystem = require('./file-system.js');
const fs = require('fs').promises;

jest.mock('superagent', () => ({
  get() {
    return Promise.resolve({ 
      body: {}
    });
  }
}));
