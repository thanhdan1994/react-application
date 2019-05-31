import React, { Component } from 'react'

class Link extends Component {
    render() {
        return (
            <li className={this.props.class}>
                <a href="/" title={this.props.title}>
                    <img src={this.props.src} alt={this.props.alt} />
                </a>
            </li>
                        // <li className="fl"><a title={"Tuổi trẻ cuối tuần"} rel="nofollow" target="_blank"><img src="img/LogoTTCT.png" alt="logo tuổi trẻ TV" /></a></li>
                        // <li className="fl"><a title={"Tuổi trẻ TV"} rel="nofollow" target="_blank"><img src="img/Tuoi-tre-tv.png" alt="logo tuổi trẻ TV" /></a></li>
                        // <li className="link-login pull-right"><i className="icon-user" /> <span><a>Đăng ký</a> | <a>Đăng nhập</a></span></li>
                        // <li className="pull-right"><a><i aria-hidden="true" className="icon icon-call" />Hotline: 0918.033.133</a></li>
        )
    }
}

export default Link