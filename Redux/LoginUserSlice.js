import { createSlice } from '@reduxjs/toolkit';
import { db } from '../database/userTable';
//import bcrypt from 'bcryptjs';

// Initial State
const initialState = {
  isLoading: false,
  error: null,
  user: null
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart: state => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    loginError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { loginStart, loginSuccess, loginError } = loginSlice.actions;


// Thunk
export const login = (email, password) => {
  try {
    //dispatch(loginStart());
    // Retrieve the user from the database
    var match = false
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        console.log("shows now")
        tx.executeSql(
          'SELECT * FROM users WHERE email = ?',
          [email],
          (_, { rows: { _array } }) => {
            // check if the email exists
            if (_array.length === 0) {
              reject("Email doesn't exist");
            }
            // Compare the entered password with the hashed password stored in the database
            // const match = bcrypt.compareSync(password, _array[0].password);
            //            const match = password === _array[0].password
           
            console.log("array found", _array)
            if (password === _array[0].password) {
              match = true
            } else {
              match = false
            }
            console.log(match)
            
            match ? resolve("Login Successful") : reject("Invalid login credentials")
          },
          (_, error) => {
            console.log(`Error logging in: ${error}`);
            reject(new Error(error))
          }
          
        );
      });
    });
   
    } catch (err) {
      console.log(err);
    }

  
};
  
  // Reducer
  export default loginSlice.reducer;