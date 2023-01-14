import { createSlice } from '@reduxjs/toolkit';
import { db } from '../database/userTable';
import bcrypt from 'bcryptjs';

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
export const login = (email, password) => async dispatch => {
    try {
      dispatch(loginStart());
      // Retrieve the user from the database
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM users WHERE email = ?',
          [email],
          (_, { rows: { _array } }) => {
            // check if the email exists
            if (_array.length === 0) {
              throw new Error("Email doesn't exist");
            }
            // Compare the entered password with the hashed password stored in the database
           // const match = bcrypt.compareSync(password, _array[0].password);
//            const match = password === _array[0].password

            if (password === _array[0].password) {
              match = true
            } else {
              match = false            
            }
            if (!match) {
              throw new Error("Invalid password");
            }
            // login success
            dispatch(loginSuccess(_array[0]));
          },
          (_, error) => {
            console.log(`Error logging in: ${error}`);
            throw new Error(error);
          }
        );
      });
    } catch (err) {
      console.log(err);
      dispatch(loginError(err.message));
    }
  };
  
  // Reducer
  export default loginSlice.reducer;