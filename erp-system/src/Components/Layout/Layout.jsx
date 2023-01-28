import React, { Fragment } from 'react'
import Router from '../../routes/Router';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return <Fragment>
  <div className="layout">
  <Sidebar />
  <div className="main__layout">
    <Navbar />

    <div className="content">
      <Router />
    </div>
  </div>
</div>
  
  </Fragment>
}
