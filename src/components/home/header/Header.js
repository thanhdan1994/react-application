import React, { Component } from 'react'
import HeaderTop from './top/HeaderTop';
import HeaderMiddle from './middle/HeaderMiddle';
import HeaderMenu from './menu/HeaderMenu';
import HeaderBanner from './banner/HeaderBanner';

class Header extends Component {
  render() {
    return (
      <header>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderMenu />
        <HeaderBanner />
      </header>

    )
  }
}

export default Header