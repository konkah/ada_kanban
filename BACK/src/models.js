const { DataTypes } = require('sequelize');
const { sequelize, connect_to_db, create_db_structure } = require('./db_connection');

connect_to_db();

exports.Card = sequelize.define(
    'cards',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        column: {
            type: DataTypes.STRING,
            allowNull : false,
        },
    }
);

create_db_structure();