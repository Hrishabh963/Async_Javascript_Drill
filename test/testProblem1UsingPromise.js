const fsUsingPromise = require('../problem1UsingPromise').fsUsingPromises;
const data = JSON.stringify({ Name: 'Hrishabh' });

//Using Promises only

fsUsingPromise.promiseMakeDir('test1_files')
    .then(() => {
        return fsUsingPromise.promiseCreateFile('file1.json', data);
    })
    .then(() => {
        return fsUsingPromise.promiseCreateFile('file2.json', data);
    })
    .then(() => {
        return fsUsingPromise.promiseCreateFile('file3.json', data);
    })
    .then(() => {
        return fsUsingPromise.promiseDeleteFile('file1.json');
    })
    .then(() => {
        return fsUsingPromise.promiseDeleteFile('file2.json');
    })
    .then(() => {
        return fsUsingPromise.promiseDeleteFile('file3.json');
    })
    .then(() => {
        return fsUsingPromise.promiseRemoveDir('test1_files');
    })
    .catch((error) => {
        console.error(error);
    })