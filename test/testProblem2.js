const problem2 = require('../problem2');
const main = async () => {
  try {
    const uppperCaseFile = await problem2.makeContentUpperCase('lipsum.txt');
    await problem2.appendFileContent(`${uppperCaseFile}`);
    const sentenceNames =
      await problem2.makeContentLowerCaseAndSplit(uppperCaseFile);
    await Promise.all(
      sentenceNames.map(async (sentenceName) => {
        await problem2.appendFileContent(`\n${sentenceName}`);
      }),
    );
    const sortedFileName = await problem2.readContentAndSort(sentenceNames);
    await problem2.appendFileContent(`\n${sortedFileName}`);
    const fileNames = await problem2.readFileContent('filenames.txt');
    const fileNamesArray = await fileNames.split('\n');
    await Promise.all(
      fileNamesArray.map(async (fileName) => {
        await problem2.removeFile(fileName);
      }),
    );
    await problem2.removeFile('filenames.txt');
    console.log(`All tasks completed successfully`);
  } catch (error) {
    console.log(error);
  }
};
main();
