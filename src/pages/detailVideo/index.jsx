import DetailVideo from '../../components/detailVideo/detailVideo';
import MainMenu from '../../components/molecules/mainMenu';
// import Sidebar from '../../components/molecules/sidebar/';
// import Navbar from '../../components/molecules/navbar/';
import { Fragment } from 'react';

export default function Video() {
  return (
    <Fragment>
      <MainMenu />
      <DetailVideo />
    </Fragment>
  );
}
