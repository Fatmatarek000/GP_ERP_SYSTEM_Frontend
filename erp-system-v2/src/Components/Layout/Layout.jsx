import React, { Fragment } from 'react'
import Sidebar from './../sidebar/Sidebar';
import Navbar from './../navbar/Navbar';
import Router from './../../routes/Router';

export default function Layout() {
  return <Fragment>
  <div className="layout">
  <Sidebar/>
  <div className="main__layout">
    <Navbar/>

    <div className="content">
      <Router/>
    </div>
  </div>
</div>
  
  </Fragment>
}
