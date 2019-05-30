import React, { Component } from 'react'

class BlockEnter extends Component {
    render() {
        return (
            <div className="block-enter">
                <h2 className="title">
                    <i className="icon icon-enter" />
                    <div className="inner-title">
                        <h2><a href="/" title="">Giải trí</a></h2>
                        <ul className="list-cat">
                            <li><a href="/" title="">Nghe đồn là</a></li>
                            <li><a href="/" title="">Sau cánh gà</a></li>
                            <li><a href="/" title="">Ngẫm thử đúng không</a></li>
                        </ul>
                    </div>
                </h2>
                <div className="outer">
                    <article className="art-enter art-b">
                        <a className="thumbs" href="/" title=""><img src="/img/photo/8-min.jpg" style={{}} alt=""/><i className="icon icon-video" /></a>
                        <div className="des">
                            <h3 className="hasComment"><a href="/" title="">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h3>
                            <a className="link-cat" href="/">Nghe đồn là</a>
                            <p>Được nhào nặn dưới bàn tay của vị đạo diễn tài năng trong dòng phim kinh dị Christopher B. Landon, nhà sản xuất đã khẳng định rằng Happy Death Day 2U.</p>
                            <article className="art-s">
                                <h4><a href="/" title="">Sương sớm, À ố Show, Teh Dar diễn ở phố cổ Hội An</a></h4>
                            </article>
                        </div>
                    </article>
                    <div className="block-bar block-qc">
                        <a href="/"><img src="/img/banner-300x250.jpg" alt="" /></a>
                    </div>
                </div>
                <div className="list-enter">
                    <div className="row">
                        <div className="col">
                            <article className="art-enter-s"><a href="/" title=""><img src="/img/photo/2-min.jpg" alt=""/></a>
                                <h3><a href="/">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                            </article>
                        </div>
                        <div className="col">
                            <article className="art-enter-s"><a href="/" title=""><img src="/img/photo/1-min.jpg" alt=""/></a>
                                <h3><a href="/">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                            </article>
                        </div>
                        <div className="col">
                            <article className="art-enter-s"><a href="/" title=""><img src="/img/photo/3-min.jpg" alt=""/></a>
                                <h3><a href="/">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                            </article>
                        </div>
                        <div className="col">
                            <article className="art-enter-s"><a href="/" title=""><img src="/img/photo/4-min.jpg" alt=""/></a>
                                <h3><a href="/">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                            </article>
                        </div>
                        <div className="col">
                            <article className="art-enter-s"><a href="/" title=""><img src="/img/photo/5-min.jpg" alt=""/></a>
                                <h3><a href="/">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default BlockEnter