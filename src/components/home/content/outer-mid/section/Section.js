import React, { Component } from 'react'

class Section extends Component {
    render () {
        return (
            <section className="content">
                    <div className="list-news">
                        <article className="art-style">
                            <div className="slick-thumb">
                                <div>
                                    <a className="thumb" href="/"><img src="/img/photo/8-min.jpg" alt="" /></a>
                                </div>
                                <div>
                                    <a className="thumb" href="/"><img src="/img/img-default.jpg" alt="" /></a>
                                </div>
                                <div>
                                    <a className="thumb" href="/"><img src="/img/photo/8-min.jpg" alt="" /></a>
                                </div>
                            </div>
                            <div className="des">
                                <h3><a href="/" title="">Đĩa đơn, MV, phim ngắn cho Ngày tình yêu Valentine</a></h3>
                                <a className="btn-viewmore" href="/" title="">Xem thêm <i className="icon icon-viewmore" /></a>
                            </div>
                        </article>
                        <article className="art-lastest art-b">
                            <a href="/" title=""><img src="/img/photo/8-min.jpg" alt="" /><i className="icon icon-video" /></a>
                            <div className="des">
                                <h4 className="hasComment"><a href="/" title="">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h4>
                                <a className="cat" href="/">Thời sự</a>
                                <article className="art-s">
                                    <h4><a href="/" title="">Sương sớm, À ố Show, Teh Dar diễn ở phố cổ Hội An</a></h4>
                                </article>
                            </div>
                        </article>
                        <article className="art-lastest">
                            <a href="/" title=""><img src="/img/photo/3-min.jpg" alt="" /><i className="icon icon-video" /></a>
                            <div className="des">
                                <h4><a href="/" title="">Hai Phượng giải nhiệt cơn khát phim hành động Việt nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                <a className="cat" href="/">Thời sự</a>
                            </div>
                        </article>
                        <article className="art-lastest">
                            <a href="/" title=""><img src="/img/photo/3-min.jpg" alt="" /><i className="icon icon-video" /></a>
                            <div className="des">
                                <h4 className="hasComment"><a href="/" title="">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h4>
                                <a className="cat" href="/">Thời sự</a>
                            </div>
                        </article>
                        <article className="art-lastest">
                            <a href="/" title=""><img src="/img/photo/3-min.jpg" alt="" /><i className="icon icon-video" /></a>
                            <div className="des">
                                <h4 className="hasComment"><a href="/" title="">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h4>
                                <a className="cat" href="/">Thời sự</a>
                            </div>
                        </article>
                    </div>
                </section>
        )
    }
}

export default Section