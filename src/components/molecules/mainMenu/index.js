import { Fragment } from 'react';
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import './mainMenu.css';

export default function Menu({ isHome, isSubscribed, isAddVideo }) {
  return (
    <Fragment>
      <Sidebar isHome={isHome} isSubscribed={isSubscribed} />
      <Navbar isAddVideo={isAddVideo} />
    </Fragment>
  );
}
