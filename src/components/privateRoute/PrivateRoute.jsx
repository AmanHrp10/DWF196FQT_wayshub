import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  let [state] = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return state.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to='landing' />
        );
      }}
    />
  );
}
