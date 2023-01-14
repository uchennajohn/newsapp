import { createSlice } from '@reduxjs/toolkit';
import { db, createDatabase, insertUserDetails } from '../database/userTable';
import bcrypt from 'bcryptjs';
import { useDispatch } from 'react-redux';




// Initial State
const initialState = {
  isLoading: false,
  error: null,
  users: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserStart: state => {
      state.isLoading = true;
    },
    createUserSuccess: state => {
      state.isLoading = false;
      state.error = null;
      console.log(state)
    },
    createUserError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { createUserStart, createUserSuccess, createUserError } = userSlice.actions;

// Thunk
export const createUser = ( username, email, password ) =>  {

  try{ const dispatch = useDispatch();
    console.log(email, password, username)
  }catch(e){
    console.log("Error here", e)
  }
   
    //insertUserDetails(username, email, password)
  // try {
  //   dispatch(createUserStart());
  //   const hashedPassword = await bcrypt.hash(password, 10);
    
  //   // Insert the user into the database
  //   db.transaction(tx => {
  //     tx.executeSql(
  //       `INSERT INTO users (email, password, username) VALUES (?, ?, ?)`,
  //       [email, hashedPassword, username],
  //       (_, result) => {
  //         console.log(`User created with id: ${result.insertId}`);
  //         dispatch(createUserSuccess());
  //       },
  //       (_, error) => {
  //         console.log(`Error creating user: ${error}`);
  //        dispatch(createUserError(error));
  //       }
  //     );
  //   });
  // } catch (err) {
  //   console.log(err);
  //   dispatch(createUserError(err.message));
  // }
};

// Reducer
export default userSlice.reducer;