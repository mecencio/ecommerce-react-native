import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ecommerce.db');

// Usar un tx.executeSql para crear cada una de las tablas
// remplazar el resolve y el reject por un then y catch despues de db.transaction

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
            );
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS address (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, street text not null, number text not null, floor text, city text not null, province text not null, country text not null, information text, lat float not null, lng float not null, userId int not null);",
                [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                }
            );
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, number TEXT NOT NULL, month TEXT NOT NULL, year TEXT NOT NULL, cod TEXT NOT NULL, cardholderName TEXT NOT NULL, cardholderId TEXT NOT NULL, userId INTEGER NOT NULL);",
                [],
                () => resolve(),
                (_, err) => reject(err)
            );
        })
    })
    return promise;
}

export const newUser = (user) => {
    const promise = new Promise((resolve, reject) => {
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
    const promise = new Promise((resolve, reject) => {
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

export const insertAddress = (street, number, floor, city, province, country, information, lat, lng, userId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "INSERT INTO address (street, number, floor, city, province, country, information, lat, lng, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
                [street, number, floor, city, province, country, information, lat, lng, userId],
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
    return promise;
}

export const loadAddresses = (userId) => {
    if (!userId) return
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM address WHERE userId = (?);",
                [userId],
                (_, result) => {
                    resolve(result)
                },
                (_, err) => {
                    reject(err)
                },
            )
        })
    })
    return promise;
}

export const changeAddress = (addressId, street, number, floor, city, province, country, information, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "UPDATE address SET street=(?), number=(?), floor=(?), city=(?), province=(?), country=(?), information=(?), lat=(?), lng=(?) WHERE id = (?);",
                [street, number, floor, city, province, country, information, lat, lng, addressId],
                (_, result) => {
                    resolve(result)
                },
                (_, error) => reject(error),
            )
        })
    })
    return promise;
}

export const removeAddress = (addressId) => {
    if (!addressId) return
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM address WHERE id =(?);",
                [addressId],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
    return promise;
}

export const insertCard = (number, month, year, cod, cardholderName, cardholderId, userId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "INSERT INTO cards (number, month, year, cod, cardholderName, cardholderId, userId) VALUES (?, ?, ?, ?, ?, ?, ?);",
                [number, month, year, cod, cardholderName, cardholderId, userId],
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
    return promise;
}

export const loadCard = (userId) => {
    if (!userId) return
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM cards WHERE userId = (?);",
                [userId],
                (_, result) => {
                    resolve(result)
                },
                (_, err) => {
                    reject(err)
                },
            )
        })
    })
    return promise;
}

export const removeCard = (cardId) => {
    if (!cardId) return
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM cards WHERE id =(?);",
                [cardId],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            )
        })
    })
    return promise;
}