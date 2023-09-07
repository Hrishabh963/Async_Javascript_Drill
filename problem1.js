const fs = require('fs');

//Functions to write and remove files programatically using only callbacks

function createFileUsingCallback(data, cb) {
  for (let index = 1; index <= 3; index++) {
    const filePath = `file${index}.json`;
    fs.writeFile(filePath, data, (error) => {
      if (error) {
        cb(error);
      } else {
        console.log(filePath, 'Created');
      }
      if (index === 3) {
        cb(null);
      }
    });
  }
}

function deleteFileUsingCallback(cb) {
  for (let index = 1; index <= 3; index++) {
    const filePath = `file${index}.json`;
    fs.rm(filePath, (error) => {
      if (error) {
        cb(error);
      } else console.log(filePath, 'Removed');
    });
  }
}

module.exports.fsUsingCallBack = {
  callBackCreate: createFileUsingCallback,
  callBackDelete: deleteFileUsingCallback,
};

//Functions to write and delete files using only promises;

function makeCreatePromise(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (error) => {
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
    fs.rm(filePath, (error) => {
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
};

//functions tp write and delete files using async/await

async function createFileUsingAsyncAwait(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (error) => {
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
    fs.rm(filePath, (error) => {
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
};
