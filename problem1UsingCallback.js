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
