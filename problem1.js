const fs = require('fs');

function createFileUsingCallback(data, cb) {
  for (let index = 1; index <= 3; index++) {
    const filePath = `file${index}.json`;
    fs.writeFile(filePath, data, (error) => {
      if (error) {
        cb(error);
      } else {
        console.log(filePath);
      }
      if (index === 3) {
        cb(null);
      }
    });
  }
}

function deleteFileUsingCallback(cb) {
  console.log(`Called delete`);
  for (let index = 1; index <= 3; index++) {
    const filePath = `file${index}.json`;
    fs.rm(filePath, (error) => {
      if (error) {
        cb(error);
      } else console.log(filePath, 'Removed');
    });
  }
}

module.exports = {
  callBackCreate: createFileUsingCallback,
  callBackDelete: deleteFileUsingCallback,
};
