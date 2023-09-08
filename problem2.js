// const fs = require('fs');

// async function readFileContent(filePath) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, 'utf-8', (error, data) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(data);
//             }
//         })

//     })
// }

// async function makeContentUpperCase(data) {
//     return new Promise((resolve, reject) => {
//         const upperCaseData = data.toUpperCase();
//         fs.writeFile('uppercase.txt', upperCaseData, (error) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve('uppercase.txt');
//             }
//         })
//     })
// }

// async function writeFileContent(data, filepath) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(filepath, data, (error) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve();
//             }
//         })
//     })
// }

// async function appendDataIntoFile(fileName) {
//     const currentData = await readFileContent('filenames.txt');

// }

// async function makeContentLowerCase(data) {
//     return new Promise((resolve, reject) => {
//         const lowerCaseData = data.toLowerCase();
//         const sentences = lowerCaseData.split(/(?<=[.!?])\s+/);
//         Promise.all(
//                 sentences.map(async(sentence, index) => {
//                     await writeFileContent(sentence, `file${index}.txt`);
//                 })
//             ).then(() => {
//                 resolve();
//             })
//             .catch((error) => {
//                 reject(error);
//             })

//     })
// }
