const Sequelize = require('sequelize');
const db = new Sequelize('uptasknode', 'root', 'CAPUFE', {
    host: 'localhost',
    dialect: 'mysql',
    PORT: '3306',
    operatorsAliases: false,
    define:{
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators 
});

module.exports = db;