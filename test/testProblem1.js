const fsUsingCallback = require('../problem1').fsUsingCallBack;
const fsUsingPromise = require('../problem1').fsUsingPromises;
const fsUsingAsyncAwait = require('../problem1').fsUsingAsyncAwait;

const data = JSON.stringify({ Name: 'Hrishabh' });

//Using callback only

fsUsingCallback.callBackCreate(data, (error) => {
  if (error) {
    console.log(`Error encountered: ${error}`);
    return;
  } else {
    fsUsingCallback.callBackDelete((error) => {
      if (error) {
        console.log(`Error encountered: ${error}`);
        return;
      } else {
        console.log(`All files Deleted using callbacks`);
      }
    });
  }
});

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

//Using Async/Await

async function createDeleteUsingAsyncAwait() {
  try {
    await fsUsingAsyncAwait.asyncMakeDir('test1_files');
    await fsUsingAsyncAwait.asyncAwaitCreate('file1.json', data);
    await fsUsingAsyncAwait.asyncAwaitCreate('file2.json', data);
    await fsUsingAsyncAwait.asyncAwaitCreate('file3.json', data);
    console.log(`All files created using async/await`);
    setTimeout(async () => {
      await fsUsingAsyncAwait.asyncAwaitDelete('file1.json');
      await fsUsingAsyncAwait.asyncAwaitDelete('file2.json');
      await fsUsingAsyncAwait.asyncAwaitDelete('file3.json');
      console.log(`All files deleted using async/await`);
      await fsUsingAsyncAwait.asyncRemoveDir('test1_files');
    }, 4000);
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
}

createDeleteUsingAsyncAwait();
