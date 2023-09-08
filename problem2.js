const fs = require('fs');

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

async function makeContentUpperCase(filePath) {
  try {
    const fileData = await readFileContent(filePath);
    const upperCaseData = await fileData.toUpperCase();
    await writeFileContent(upperCaseData, 'uppercase.txt');
    return 'uppercase.txt';
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
}

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

async function readContentAndSort(fileNames) {
  try {
    const contents = [];
    await Promise.all(
      fileNames.map(async (fileName) => {
        const fileData = await readFileContent(fileName);
        await contents.push(fileData);
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
