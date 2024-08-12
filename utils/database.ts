import * as SQLite from "expo-sqlite/legacy";
import {IPlace} from "../models";

const database = SQLite.openDatabase("places.db") as SQLite.SQLiteDatabase;

async function init() {
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

async function insertPlace(place: IPlace) {
  const promise = new Promise(async (resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
}

export {init, insertPlace};
