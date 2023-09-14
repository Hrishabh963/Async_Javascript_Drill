const fs = require('fs');
//Functions to write and delete files using only promises;

function makeDir(dirName) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirName, (error) => {
      if (error) {
        reject(error);
      } else {
        console.log(`${dirName} made successfully`);
        resolve();
      }
    });
  });
}

function removeDir(dirName) {
  return new Promise((resolve, reject) => {
    fs.rmdir(dirName, (error) => {
      if (error) {
        reject(error);
      } else {
        console.log(`${dirName} deleted successfully`);
        resolve();
      }
    });
  });
}

function createFileUsingPromise(filePath, data) {
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

function deleteFileUsingPromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(`./test1_files/${filePath}`, (error) => {
      if (error) {
        reject(error);
      } else {
        console.log(`${filePath} Deleted`);
        resolve();
      }
    });
  });
}

module.exports.fsUsingPromises = {
  promiseCreateFile: createFileUsingPromise,
  promiseDeleteFile: deleteFileUsingPromise,
  promiseMakeDir: makeDir,
  promiseRemoveDir: removeDir,
};
