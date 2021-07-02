const { sequelize } = require("../config/db.config");

module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        passportId: {
            type: Sequelize.STRING,
            unique: true,
        },
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        courtTime: {
            type: Sequelize.INTEGER
        },
        poolTime: {
            type: Sequelize.INTEGER
        },
        fitnessTime: {
            type: Sequelize.INTEGER
        },
        aeroTime: {
            type: Sequelize.INTEGER
        },
        subTime: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        birthdate: {
            type: Sequelize.DATE,
        },
        testedDate: {
            type: Sequelize.DATE,
        },
        department: {
            type: Sequelize.STRING,
        },
        jobTitle: {
            type: Sequelize.STRING,
        },
        phoneNumber: {
            type: Sequelize.STRING,
        },
        // createdAt: {
        //     type: Sequelize.DATETIME,
        // }
    });

    return Customer;
}