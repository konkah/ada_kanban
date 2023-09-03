const Sequelize = require('sequelize');

const dbDatabase = process.env.MYSQL_DATABASE;
const dbUsername = process.env.MYSQL_USER;
const dbPassword = process.env.MYSQL_PASSWORD

exports.sequelize = new Sequelize(
    dbDatabase,
    dbUsername,
    dbPassword,
    {
        host: 'ada-kanban-db-mysql',
        dialect: 'mysql',
    }
)

exports.connect_to_db = () => exports.sequelize.authenticate()
    .then(
        () => {
            console.log('Connection has been established successfully.');
        }
    )
    .catch(
        (error) => {
            console.error('Unable to connect to the database: ', error);
        }
    );

exports.create_db_structure = () => exports.sequelize.sync()
    .then(
        () => {
            console.log('Created database structure successfully.');
        }
    )
    .catch(
        (error) => {
            console.error('Unable to create database structure: ', error);
        }
    );
