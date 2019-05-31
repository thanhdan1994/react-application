import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'

const menus = [
    {
        to: '/tin-tuc',
        exact: true,
        name: 'Tin tức'
    },
    {
        to: '/biem-hoa',
        exact: true,
        name: 'Biếm hoạ'
    },
    {
        to: '/video',
        exact: true,
        name: 'Video'
    }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => (
                <li className={match ? "active" : ""}>
                    <Link to={to}>{label}</Link>
                </li>
            )}
        />
    )
};

class HeaderMenu extends Component {
    render() {
        return (
            <div className="header-menu ui sticky">
                <div className="container">
                    <ul className="clearfix">
                        {this.showMenu(menus)}
                        <li className="send">
                            <Link className="btn-send" to="/gui-bai" title="Gui bai">+ Gửi bài</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    showMenu = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            })
        }
        return result;
    };
}

export default HeaderMenu