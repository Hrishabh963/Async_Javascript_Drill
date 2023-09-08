const fs = require('fs');
//Functions to write and delete files using only promises;

function makeDir(dirName) {
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

function removeDir(dirName) {
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

function makeCreatePromise(filePath, data) {
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

function createFileUsingPromises(data) {
  const createPromises = [];
  for (let index = 1; index <= 3; index++) {
    const filePath = `file${index}.json`;
    const promise = makeCreatePromise(filePath, data);
    createPromises.push(promise);
  }
  return Promise.all(createPromises);
}

function makeDeletePromise(filePath) {
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

function deleteFileUsingPromises() {
  const deletePromises = [];
  for (let index = 1; index <= 3; index++) {
    const filePath = `file${index}.json`;
    const promise = makeDeletePromise(filePath);
    deletePromises.push(promise);
  }
  return Promise.all(deletePromises);
}

module.exports.fsUsingPromises = {
  promiseCreate: createFileUsingPromises,
  promiseDelete: deleteFileUsingPromises,
  promiseMakeDir: makeDir,
  promiseRemoveDir: removeDir,
};
