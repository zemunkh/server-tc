"use strict";
const sqlite3 = require('sqlite3').verbose();

class Db {
    constructor(file) {
        this.db = new sqlite3.Database(file);
        this.createTable()
    }                
    // created_at TEXT DEFAULT CURRENT_TIMESTAMP
    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS user (
                id integer PRIMARY KEY,
                username text UNIQUE,
                user_pass text,
                is_admin integer)`
        return this.db.run(sql);
    }

    selectByUsername(username, callback) {
        return this.db.get(
            `SELECT * FROM user WHERE username = ?`,
            [username],function(err,row){
                callback(err,row)
            })
    }

    insertAdmin(user, callback) {
        return this.db.run(
            'INSERT INTO user (username,user_pass,is_admin) VALUES (?,?,?)',
            user, (err) => {
                callback(err)
            })
    }

    selectAll(callback) {
        return this.db.all(`SELECT * FROM user`, function(err,rows){
            callback(err,rows)
        })
    }

    insert(user, callback) {
        return this.db.run(
            'INSERT INTO user (username,user_pass) VALUES (?,?)',
            user, (err) => {
                callback(err)
            })
    }

    updatePassword(user, callback) {
        return this.db.run(
            'UPDATE user SET user_pass = ? WHERE username = ?',
            user, (err) => {
                callback(err)
            })
    }

    deleteByUsername(username, callback) {
        return this.db.run(
            'DELETE FROM user WHERE username = ?',
            [username], function(err) {
                callback(err)
            })
    }
}

module.exports = Db