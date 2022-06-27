import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const blogSlice = createSlice({
    name: "blog",
    initialState: {
        usersList: [],
        isFetchingUsers: false,
        errorUsers: null,
        postsList: [],
        isFetchingPost: false,
        errorPost: null,
        commentsList:  [],
        isFetchingComments: false,
        errorComments: null,
    },
    reducers: {
        fetchingUsers: (state) => {
            state.isFetchingUsers = true;
        },
        fetchedUsers: (state, action) => {
            state.isFetchingUsers = false;
            state.usersList = action.payload;
        },
        fetchErrorUsers: (state, action) => {
            state.isFetchingUsers = false;
            state.errorUsers = action.payload;
        },
        fetchingPostByUsers: (state) => {
          state.isFetchingPost = true;
        },
        fetchedPostByUsers: (state, action) => {
          state.isFetchingPost = false;
          state.postsList = action.payload;
        },
        fetchErrorPostByUsers: (state, action) => {
          state.isFetchingPost = false;
          state.errorPost = action.payload;
        },
        fetchingComments: (state) => {
          state.isFetchingComments = true;
        },
        fetchedComments: (state, action) => {
          state.isFetchingComments = false;
          state.commentsList = action.payload;
        },
        fetchErrorComments: (state, action) => {
          state.isFetchingComments = false;
          state.errorComments = action.payload;
        },
    }
});

export const getUsers = () => {
    return async (dispatch) => {
      dispatch(fetchingUsers());
      try {
        const response = await axios(`https://jsonplaceholder.typicode.com/users`);
        dispatch(fetchedUsers(response.data));
      } catch (error) {
        dispatch(fetchErrorUsers(error));
      }
    };
  };

export const getPostByUsers = (userId) => {
  return async (dispatch) => {
    dispatch(fetchingPostByUsers());
    try {
      const response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      dispatch(fetchedPostByUsers(response.data));
    } catch (error) {
      dispatch(fetchErrorPostByUsers(error));
    }
  };
};
export const getCommentsByPost = (postId) => {
  return async (dispatch) => {
    dispatch(fetchingComments());
    try {
      const response = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      dispatch(fetchedComments(response.data));
    } catch (error) {
      dispatch(fetchErrorComments(error));
    }
  };
};

export const {
    fetchingUsers,
    fetchedUsers,
    fetchErrorUsers,
    fetchingPostByUsers,
    fetchedPostByUsers,
    fetchErrorPostByUsers,
    fetchingComments,
    fetchedComments,
    fetchErrorComments
} = blogSlice.actions;

export default blogSlice.reducer;