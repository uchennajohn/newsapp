import * as SQLite from 'expo-sqlite';

//  const db = SQLite.openDatabase('myDatabase.db');

// const createUsersTable = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, password TEXT, username TEXT )',
//       [],
//       () => {
//         console.log('Successfully created users table');
//       },
//       error => {
//         console.log(`Error creating users table: ${error}`);
//       }
//     );
//   });
// };

// export { db, createUsersTable };


//create DB
const db = SQLite.openDatabase('app.db');
const createDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
              id integer PRIMARY KEY,
              username TEXT NOT NULL,
              email TEXT NOT NULL,
              password TEXT NOT NULL
          )`,
        [],
        () => {
                  console.log('Successfully created users table');
                 },
                 error => {
                   console.log(`Error creating users table: ${error}`);
                 },
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
};


//add users
const insertUserDetails = (username, email, password) => {
  try{
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
          [username, email, password],
          (_, result) => resolve(result),
          (_, error)=> reject(error)
        );
      });
      console.log("Added Successfully")
    });
  }catch(e){
      console.log("Erorr inserting User", e )
  }
  
};

//fetch ALL user
const fetchAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users",
        [],
        (_, result) => {
          var temp = [];
          for (let i = 0; i < result.rows.length; ++i)
            temp.push(JSON.stringify(result.rows.item(i)));
          console.log("Result=>" + temp);
          console.log("Feched Everything" + result);
        },
        (_, error) => reject(error)
      );
    });
  });
};




export { db, createDatabase, insertUserDetails, fetchAllUsers };