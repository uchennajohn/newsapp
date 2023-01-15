import { createSlice } from '@reduxjs/toolkit';
import { insertUserDetails, fetchAllUsers } from '../database/userTable';
import bcrypt from 'bcrypt-react-native';
//import { useDispatch } from 'react-redux';



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
export const createUser = async (username, email, password) =>  {
  try {
    // const saltRounds = 10;
    // const salt = await bcrypt.genSalt(saltRounds);
    // const hashedPassword = await bcrypt.hash(plainPassword, salt, function (err, hash) {
    //   if (err) {
    //     return err;
    //   }

    //   return hash
    // });
    // console.log(`Hashed password: ${hashedPassword}`);
    
    // const salt = await bcrypt.getSalt(10);
    // const hash = await bcrypt.hash(salt, password);
    // insertUserDetails(username, email, hash)


    insertUserDetails("single user data",username, email, password)

    fetchAllUsers()

   } catch (e) { 
    console.log(e)
  }

  
  
  // try {
  //   dispatch(createUserStart());
  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   // Insert the user into the database
  //   db.transaction(tx => {
  //     tx.executeSql(
  //       `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
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