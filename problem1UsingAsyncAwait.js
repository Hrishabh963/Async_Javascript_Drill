const fs = require('fs');
//functions to write and delete files using async/await

async function makeAsyncDir(dirName) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirName, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

async function removeAsyncDir(dirName) {
  return new Promise((resolve, reject) => {
    fs.rmdir(dirName, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
async function createFileUsingAsyncAwait(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./test1_files/${filePath}`, data, (error) => {
      if (error) {
        reject(error);
      } else {
        console.log(`${filePath} Created`);
        resolve();
      }
    });
  });
}

async function deleteFileUsingAsyncAwait(filePath) {
  return new Promise((resolve, reject) => {
    fs.rm(`./test1_files/${filePath}`, (error) => {
      if (error) {
        reject(error);
      } else {
        console.log(`${filePath} Deleted`);
        resolve();
      }
    });
  });
}

module.exports.fsUsingAsyncAwait = {
  asyncAwaitCreate: createFileUsingAsyncAwait,
  asyncAwaitDelete: deleteFileUsingAsyncAwait,
  asyncMakeDir: makeAsyncDir,
  asyncRemoveDir: removeAsyncDir,
};
