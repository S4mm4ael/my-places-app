import * as SQLite from "expo-sqlite/legacy";

const database = SQLite.openDatabase("places.db") as SQLite.SQLiteDatabase;

export async function init() {
  const promise = new Promise(async (resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places 
        (id INTEGER PRIMARY KEY NOT NULL, 
        title TEXT NOT NULL, imageUri TEXT NOT NULL, 
        address TEXT NOT NULL, lat REAL NOT NULL, 
        lng REAL NOT NULL)`,
        [],
        () => {
          resolve("");
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
}
