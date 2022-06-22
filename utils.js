const fs = require('fs').promises;

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return [];
  }
};

const writeContentFile = async (path, content) => {
  try {
    const allContent = await readContentFile(path);

  allContent.push(content);
  fs.writeFile(path, JSON.stringify(allContent));

    return content;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = {
  readContentFile,
  writeContentFile,
};