import { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  isLogin: false,
  Users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': //   const userFilter = state.Users.filter((user) => user.id == );
      return {
        isLogin: true,
      };
    case 'LOGOUT':
      return {
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
