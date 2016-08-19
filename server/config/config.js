var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
         db: 'mongodb://0.0.0.0:27017/mymongodb',
        //db: 'mongodb://wasya:mymongodb@ds053539.mongolab.com:53539/mymongodb',
        //db: 'mongodb://wasya:mymongodb@ds033390.mongolab.com:33390/mymongodb',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};
