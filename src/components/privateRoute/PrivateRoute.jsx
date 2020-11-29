import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  const [state] = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        state.isLogin ? <Component {...props} /> : <Redirect to='/login' />;
      }}
    />
  );
}
