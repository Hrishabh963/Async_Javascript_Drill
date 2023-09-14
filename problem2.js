const fs = require('fs');

//Read file data
async function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

//Append Data into filenames.txt

async function appendFileContent(data) {
  return new Promise((resolve, reject) => {
    fs.appendFile('filenames.txt', data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

//write file content into a new file

async function writeFileContent(data, filepath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

//Remove a file
async function removeFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

//Make content uppercase

async function makeContentUpperCase(fileData) {
  try {
    const upperCaseData = await fileData.toUpperCase();
    await writeFileContent(upperCaseData, 'uppercase.txt');
    return 'uppercase.txt';
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
}

//Make content into lowercase and split

async function makeContentLowerCaseAndSplit(filePath) {
  try {
    const fileData = await readFileContent(filePath);
    const lowerCaseData = await fileData.toLowerCase();
    const sentenceData = await lowerCaseData.split(/(?<=[.!?])\s+/);
    const fileNames = [];
    await Promise.all(
      sentenceData.map(async (sentence, index) => {
        await writeFileContent(sentence, `file${index}.txt`);
        await fileNames.push(`file${index}.txt`);
      }),
    );
    return fileNames;
  } catch (error) {
    console.log(error);
  }
}

//read the content and sort it into a new file

async function readContentAndSort(fileNames) {
  try {
    const contents = [];
    await Promise.all(
      fileNames.map(async (fileName) => {
        const fileData = await readFileContent(fileName);
        contents.push(fileData);
      }),
    );
    await writeFileContent(contents.join('\n'), 'sorted.txt');
    return 'sorted.txt';
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  readFileContent: readFileContent,
  removeFile: removeFile,
  makeContentUpperCase: makeContentUpperCase,
  readContentAndSort: readContentAndSort,
  makeContentLowerCaseAndSplit: makeContentLowerCaseAndSplit,
  appendFileContent: appendFileContent,
};
