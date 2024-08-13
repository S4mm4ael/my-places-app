import * as SQLite from "expo-sqlite/legacy";
import {IPlace, Place} from "../models";

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
          console.log(result);
          resolve(result);
        },
        (_, err) => {
          console.log(err);
          reject(err);
        }
      );
    });
  });

  return promise;
}

async function loadPlaces(): Promise<IPlace[]> {
  const promise = new Promise(async (resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          const places = [];

          for (const dp of result.rows._array) {
            places.push(
              new Place(
                dp.title,
                dp.address,
                {
                  lat: dp.lat,
                  lng: dp.lng,
                },
                dp.imageUri,
                dp.id.toString()
              )
            );
          }

          resolve(places);
        },
        (_, err) => {
          console.log(err);
          reject(err);
        }
      );
    });
  });

  return promise;
}

async function fetchPlaceDetails(id: string) {
  const promise = new Promise(async (resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places WHERE id = ?`,
        [id],
        (_, result) => {
          const dp = result.rows._array[0];
          const place = new Place(
            dp.title,
            dp.address,
            {
              lat: dp.lat,
              lng: dp.lng,
            },
            dp.imageUri,
            dp.id.toString()
          );
          console.log(place);
          resolve(place);
        },
        (_, err) => {
          console.log(err);
          reject(err);
        }
      );
    });
  });
  return promise;
}

export {init, insertPlace, loadPlaces, fetchPlaceDetails};
