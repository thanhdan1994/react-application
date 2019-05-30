import React, { Component } from "react";

class BlockVideo extends Component {
    render() {
        return (
            <div className="block-video">
                <h2 className="title">
                    <i className="icon icon-title-video" />
                    <div className="inner-title">
                        <h2><a href="/" title="">Videos</a></h2>
                        <ul className="list-cat">
                            <li><a href="/" title="">Cười xối xả</a></li>
                            <li><a href="/" title="">TV show</a></li>
                            <li><a href="/" title="">Show cười</a></li>
                        </ul>
                    </div>
                </h2>
                <article className="art-media">
                    <div className="inner-media">
                        <div className="video-wrap">
                            <div className="video">
                                <div style={{ backgroundColor: '#f6f6f6' }} className="media-content">
                                    <video id="video_72673" poster="https://static.tuoitrenews.vn/ttnew/r/2018/08/09/thumb-12-1533785196.png" style={{ width: '100%' }} className="video-js vjs-default-skin vjs-big-play-centered">
                                        <source src="https://static.tuoitrenews.vn/ttnew/r/2018/08/09/sand-boarding-1533785186.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="des">
                        <h1>Khởi tố hai người đưa phụ nữ mang thai vượt biên bán con </h1>
                        <ul className="list-tool">
                            <li><a href="/" title="">Thời sự</a></li>
                            <li><a href="/" title="">Nguyễn Quang</a></li>
                        </ul>
                        <p> TTC - Tối 21-2, 542 doanh nghiệp đã được trao chứng nhận hàng Việt Nam chất lượng cao (HVNCLC) 2019. Trong bối cảnh mới, 42 doanh nghiệp đã được trao chứng nhận hàng Việt Nam chất lượng cao (HVNCLC) 2019. Trong bối cảnh mới. </p>
                        <div className="tag"><a href="/" title="">cố thủ tướng</a> <a href="/" title="">Phan Văn Khải</a></div>
                        <ul className="list-social-1 list-cm">
                            {/* <li><i class="fa fa-heart-o" aria-hidden="true"></i> 230</li> */}
                            <li><iframe src="iframe/like_new-18.html" title="iframe like" style={{ width: '59px', height: '31px' }} /></li>
                            <li className="outer-share">
                                <i className="icon icon-share" aria-hidden="true" /> 100
          <div className="block-share">
                                    <h5>Chia sẻ trên</h5>
                                    <a className="facebook" href="/" title=""><i className="fa fa-facebook-official" aria-hidden="true" /> Facebook</a>
                                    <a className="facebookmes" href="/" title=""><i className="icon-messenger" /> Facebook messenger</a>
                                </div>
                            </li>
                            <li className="text-cm">
                                <textarea placeholder="Viết bình luận" defaultValue={""} />
                            </li>
                        </ul>
                        <div className="s-comment">
                            <div className="inner">
                                <a className="thumbs" href="/"><img src="img/user.jpg" alt="" /></a>
                                <div className="des">
                                    <div className="cmt-content"><span><strong>Văn Quân</strong></span> The typhoon is forecast to weaken into a tropical depression depression ...
              <div className="tool-like">
                                            <span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">Xem tất cả bình luận</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="row">
                    <div className="col-sm-3">
                        <article className="art-video-top playing"><a className="thumb" href="/" title=""><img src="img/photo/2-min.jpg" alt="" /><span className="tit time">Đang chạy</span></a>
                            <h3><a href="/">Được nhào nặn dưới bàn tay của vị đạo diễn tài năng</a></h3>
                        </article>
                    </div>
                    <div className="col-sm-3">
                        <article className="art-video-top watched"><a className="thumb" href="/" title=""><img src="img/photo/2-min.jpg" alt="" /><span className="tit time">Đã xem</span></a>
                            <h3><a href="/">Được nhào nặn dưới bàn tay của vị đạo diễn tài năng</a></h3>
                        </article>
                    </div>
                    <div className="col-sm-3">
                        <article className="art-video-top"><a className="thumb" href="/" title=""><img src="img/photo/2-min.jpg" alt="" /><span className="tit time">10:45</span></a>
                            <h3><a href="/">Được nhào nặn dưới bàn tay của vị đạo diễn tài năng</a></h3>
                        </article>
                    </div>
                    <div className="col-sm-3">
                        <article className="art-video-top"><a className="thumb" href="/" title=""><img src="img/photo/2-min.jpg" alt="" /><span className="tit time">10:45</span></a>
                            <h3><a href="/">Được nhào nặn dưới bàn tay của vị đạo diễn tài năng</a></h3>
                        </article>
                    </div>
                </div>
            </div>

        )
    }
}
export default BlockVideo