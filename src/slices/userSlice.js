import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constant";
export const fetchUserList = createAsyncThunk("users/fetchPost", async () => {
  try {
    const data = await fetch("/users");
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
      const data = await fetch("/users", options({ ...newPost, id: nanoid() }));
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
        state.users = state.users.concat(action.payload);
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
