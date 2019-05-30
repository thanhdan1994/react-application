import React, { Component } from 'react'

class LinkUser extends Component {
    render() {
        return (
            <li className={this.props.class}>
                <i className="icon-user"></i>
                <span>
                    <a href="/" title="Đăng ký">Đăng ký</a> | <a href="/" title="Đăng nhập">Đăng nhập</a>
                </span>
            </li>
        )
    }
}

export default LinkUser