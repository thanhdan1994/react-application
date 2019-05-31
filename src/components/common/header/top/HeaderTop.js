import React, { Component } from 'react'
import LinkLogo from './LinkLogo';
import LinkUser from './LinkUser';

class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top">
                <div className="container clearfix">
                    <ul className="list-logo-top">
                        <LinkLogo class="fl" title="Tuổi Trẻ" src="/img/Tuoi-tre-online.png" alt="logo tuổi trẻ"/>
                        <LinkLogo class="fl"title="Tuổi trẻ cuối tuần" src="/img/LogoTTCT.png" alt="logo tuổi trẻ cuoi tuan"/>
                        <LinkLogo class="fl" title="Tuổi trẻ TV" src="/img/Tuoi-tre-tv.png" alt="logo tuổi trẻ TV"/>
                        <LinkUser class="link-login pull-right" />
                        <li className="pull-right"><a title="Hot Line" href="tel:0918033133"><i aria-hidden="true" className="icon icon-call"></i>Hotline: 0918.033.133</a></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default HeaderTop