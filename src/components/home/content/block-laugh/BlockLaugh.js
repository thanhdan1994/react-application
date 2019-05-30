import React, { Component } from 'react'

class BlockLaugh extends Component {
    render() {
        return (
            <div className="block-laugh">
                <h2 className="title">
                    <i className="icon icon-laugh" />
                    <div className="inner-title">
                        <h2><a href="/" title="">Đời cười</a></h2>
                        <ul className="list-cat">
                            <li><a href="/" title="">Góc nhìn</a></li>
                            <li><a href="/" title="">Bình luận</a></li>
                            <li><a href="/" title="">Miễn bình luậnz</a></li>
                        </ul>
                    </div>
                </h2>
                <div className="outer scrollToTwo">
                    <section className="content">
                        <div className="list-news">
                            <article className="art-lastest art-b">
                                <a href="/" title=""><img src="/img/photo/8-min.jpg" style={{}} alt=""/><i className="icon icon-video" /></a>
                                <div className="des">
                                    <h4 className="hasComment"><a href="/" title="">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h4>
                                    <a className="cat" href="/">Thời sự</a>
                                    <article className="art-s">
                                        <h4><a href="/" title="">Sương sớm, À ố Show, Teh Dar diễn ở phố cổ Hội An</a></h4>
                                    </article>
                                </div>
                            </article>
                            <article className="art-lastest">
                                <a href="/" title=""><img src="/img/photo/3-min.jpg" style={{}} alt=""/><i className="icon icon-video" /></a>
                                <div className="des">
                                    <h4 className="hasComment"><a href="/" title="">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h4>
                                    <a className="cat" href="/">Thời sự</a>
                                </div>
                            </article>
                            <article className="art-lastest">
                                <a href="/" title=""><img src="/img/photo/3-min.jpg" style={{}} alt=""/><i className="icon icon-video" /></a>
                                <div className="des">
                                    <h4 className="hasComment"><a href="/" title="">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> </h4>
                                    <a className="cat" href="/">Thời sự</a>
                                </div>
                            </article>
                            <article className="art-lastest">
                                <a href="/" title=""><img src="/img/photo/3-min.jpg" style={{}} alt=""/><i className="icon icon-video" /></a>
                                <div className="des">
                                    <h4 className="hasComment"><a href="/" title="">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h4>
                                    <a className="cat" href="/">Thời sự</a>
                                </div>
                            </article>
                        </div>
                    </section>
                    <aside className="sidebar">
                        <div className="block-bar block-qc ui sticky two">
                            <a href="/"><img src="/img/banner-300x600.jpg" alt="" /></a>
                        </div>
                    </aside>
                </div>
            </div>

        )
    }
}

export default BlockLaugh