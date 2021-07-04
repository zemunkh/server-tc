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
    username: 'root',
    password: 'Local99#',
    host: '10.1.3.71',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;