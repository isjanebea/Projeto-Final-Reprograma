const fs = require('fs');
const path = require('path');

module.exports = {
    async readFile(dir) {
    const _path = path.join(__dirname, dir)
        return new Promise((resolve, reject) => {
            fs.readFile(_path, 'utf8', (error, data) => {
                if (error) {
                    reject(error);
                }
                resolve(data);
            });
        });
    }
}