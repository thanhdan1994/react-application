import React, { Component } from 'react'

class Title extends Component {
    render() {
        return (
            <h2 className="title">
                <i className="icon icon-laugh" />
                <div className="inner-title">
                    <h2><a href="/" title="">Đời cười</a>
                        <span className="inner">
                            <a href="/" title="">Bình luận</a>
                            <a href="/" title="">Miễn bình luận</a>
                            <a href="/" title="">Góc nhìn</a>
                        </span>
                    </h2>
                    <ul className="list-cat">
                        <li><a href="/" rel="nofollow" title="Breaking news" className="icon-direction"> </a></li>
                        <li><a href="/" title="">Cười xối xả</a></li>
                        <li><a href="/" title="">TV show</a></li>
                        <li><a href="/" title="">Show cười</a></li>
                    </ul>
                </div>
            </h2>
        )
    }
}
export default Title