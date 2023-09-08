const fs = require('fs');

//Functions to write and remove files programatically using only callbacks

function createFileUsingCallback(data, cb) {
  for (let index = 1; index <= 3; index++) {
    const filePath = `file${index}.json`;
    fs.mkdir('test1_files', () => {
      fs.writeFile(`./test1_files/${filePath}`, data, (error) => {
        if (error) {
          cb(error);
        } else {
          console.log(filePath, 'Created');
        }
        if (index === 3) {
          cb(null);
        }
      });
    });
  }
}

function deleteFileUsingCallback(cb) {
  for (let index = 1; index <= 3; index++) {
    const filePath = `file${index}.json`;
    fs.rm(`./test1_files/${filePath}`, (error) => {
      if (error) {
        cb(error);
      } else {
        console.log(filePath, 'Removed');
      }
      if (index === 3) {
        fs.rmdir('test1_files', () => {
          cb(null);
        });
      }
    });
  }
}

module.exports.fsUsingCallBack = {
  callBackCreate: createFileUsingCallback,
  callBackDelete: deleteFileUsingCallback,
};

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

//functions tp write and delete files using async/await

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
