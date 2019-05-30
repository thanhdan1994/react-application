import React, { Component } from 'react'
import LinkSocial from './LinkSocial';
import Logo from './Logo';

class HeaderMiddle extends Component {
    render() {
        return (
            <div className="header-middle">
                <div className="container clearfix">
                    <Logo />
                    <div id="search-frm" className="frm-search fr">
                        <input id="txtSearch" type="text" placeholder="Nhập nội dung cần tìm ..." className="txt-search" />
                        <button className="btn-search"><i className="icon icon-search" /></button>
                    </div>
                    <ul className="list-social-top">
                        <LinkSocial href="#" title="" class="fa fa-facebook"/>
                        <LinkSocial href="#" title="" class="fa fa-instagram"/>
                        <LinkSocial href="#" title="" class="fa fa-youtube-play"/>
                    </ul>
                </div>
            </div>

        )
    }
}

export default HeaderMiddle