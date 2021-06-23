const env = {
    database: 'customers',
    username: 'root',
    password: 'capitolcia',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const env_production = {
    database: 'sportcomplex',
    username: 'admin',
    password: 'Muugii!23',
    host: '10.1.3.49',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;