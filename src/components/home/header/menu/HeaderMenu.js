import React, { Component } from 'react'

class HeaderMenu extends Component {
    render() {
        return (
            <div className="header-menu ui sticky">
                <div className="container">
                    <ul className="clearfix">
                        <li className="active"><a href="/" title="ĐỜI CƯỜI">Tin tức</a></li>
                        <li><a href="/" title="GIẢI TRÍ">Biếm họa</a></li>
                        <li><a href="/" title="VIDEO">Video</a></li>
                        <li className="send"><a className="btn-send" href="/" title="Gui bai">+ Gửi bài</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderMenu