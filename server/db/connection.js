const mongoose = require('mongoose');
const dbConfig = require('./db_config.js');
exports.connectDatabases = function() {
    connections = [];
    for(var key in dbConfig.dbs){
        var db = dbConfig.dbs[key];
        switch(db['engine']){
            case 'mongodb':
                connections.push(mongoose.connect(`${db['engine']}://${db['username']}:${db['password']}@${db['host']}:${db['port']}/${db['database']}`)); 
            break;
        }
    }
    return connections;
};

