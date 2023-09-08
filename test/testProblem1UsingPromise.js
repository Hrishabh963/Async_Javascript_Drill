const fsUsingPromise = require('../problem1UsingPromise').fsUsingPromises;
const data = JSON.stringify({ Name: 'Hrishabh' });
//Using Promises only

fsUsingPromise
  .promiseMakeDir('test1_files')
  .then(() => {
    return fsUsingPromise.promiseCreate(data);
  })
  .then(() => {
    return fsUsingPromise.promiseDelete();
  })
  .then(() => {
    return fsUsingPromise.promiseRemoveDir('test1_files');
  })
  .catch((error) => {
    if (error) {
      console.log(error);
    }
  });
