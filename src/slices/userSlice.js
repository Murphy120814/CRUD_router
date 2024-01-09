import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { options, USER_URL } from "../../constant";
import { sub } from "date-fns";

export const fetchUserList = createAsyncThunk("users/fetchPost", async () => {
  try {
    const data = await fetch(USER_URL);
    const dataJSON = await data.json();
    console.log("hell", dataJSON);
    return dataJSON;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const addNewPost = createAsyncThunk(
  "users/addNewPost",
  async (newPost) => {
    try {
      const data = await fetch(
        USER_URL,
        options({
          ...newPost,
          id: nanoid(),
          timeOfCreation: new Date().toISOString(),
        })
      );
      const dataJSON = await data.json();
      return dataJSON;
    } catch (error) {
      return error.message;
    }
  }
);
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle", // loading || success || failure
    error: null,
  },
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.users.push(action.payload);
      },
      prepare: (username, phoneNumber, position, sex) => {
        return {
          payload: {
            username,
            phoneNumber,
            position,
            sex,
            id: nanoid(),
          },
        };
      },
    },
    removeUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = "success";
        let min = 1;
        const loadedPost = action.payload.map((user) => {
          user.timeOfCreation = sub(new Date(), {
            minutes: min++,
          }).toISOString();
          return user;
        });
        state.users = state.users.concat(loadedPost);
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export const selectAllUser = (globalState) => globalState.users.users;
export const getStatus = (globalState) => globalState.users.status;
export const getError = (globalState) => globalState.users.error;

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
