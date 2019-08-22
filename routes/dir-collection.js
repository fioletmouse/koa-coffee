const fs = require('fs')
const path = require('path');

// main folder for search
const source = path.join(path.dirname(__dirname), 'entity');

function collectDirs () {
  return fs.readdirSync(source, { withFileTypes: true })
    .reduce((res, curr) => {
      const folderPath =  path.join(source, curr.name, 'routes.js');
      curr.isDirectory() && fs.existsSync(folderPath) && res.push({ folder: curr.name, prefix: '/' + curr.name})
    return res }, [])
};

module.exports = collectDirs();