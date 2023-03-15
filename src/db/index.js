import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ecommerce.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS user (id text primary key not null, firstname text not null, lastname text not null, document integer not null, phone integer not null, email text not null, image text not null);",
                [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise;
}

export const newUser = (user) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "INSERT INTO user (id, firstname, lastname, document, phone, email, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [user.id, user.firstname, user.lastname, user.document, user.phone, user.email, user.image],
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
    return promise
}

export const changeImage = (userId, image) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "UPDATE user SET image=(?) WHERE id = (?)",
                [image, userId],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise;
}

export const fetchUser = (userId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM user WHERE id = (?)",
                [userId],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
    return promise;
}