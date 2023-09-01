import { useReducer } from "react";

const initialState = {
  user: null,
  loading: true,
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "UPDATE":
      return { ...state, user: { ...state.user, ...action.payload } };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
