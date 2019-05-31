import React, { Component } from 'react'

class WrapperCm extends Component {
    render() {
        return (
            <div className="wrapper-cm">
                <div className="plugin-comment">
                    <div className="tool-comment">
                        <h4>Bình luận (285)</h4>
                        <span className="fr">
                            <a className="active" href="/" title="">Nổi bật</a>
                            <a href="/" title="">Mới nhất</a>
                        </span>
                    </div>
                    <div className="wrapper-comment">
                        <div className="comment media"><img src="/img/user.jpg" alt="" className="mr-3" />
                            <div className="media-body">
                                <div className="inner-cm">
                                    <h5 className="mt-0">Bạn A</h5>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                        <div className="box-reply-cm">
                                            <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                            <div className="text-right">
                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media mt-3"><a href="/"><img src="/img/user.jpg" alt="" className="mr-3" /></a>
                            <div className="media-body">
                                <h5 className="mt-0">Media heading</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                    <div className="box-reply-cm">
                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                        <div className="text-right">
                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> <a href="/" className="viewmore">Xem thêm bình luận</a>
                    </div>
                </div>
            </div>
        )
    }
}

class WriteComment extends Component {
    render() {
        return (
            <div className="comment-write">
                <h4>Viết bình luận</h4>
                <textarea className="box-reply-cm" data-toggle="modal" data-target="#modalCom_1" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                <div className="text-right">
                </div>
            </div>
        )
    }
}

class Row1ScrollToOne extends Component {
    render() {
        return (
            <div className="row-1 scrollToOne">
                <div className="box-665">
                    <figure data-fancybox="gallery" href="/img/photo/2-min.jpg" data-caption="1-VẺ ĐẸP YÊN BÌNH CỦA VÙNG ĐẤT PHÚ YÊN ĐƯỢC THIÊN NHIÊN BAN TẶNG" className="img-cover fancybox"><img src="/img/photo/2-min.jpg" alt="" /></figure>
                    <div className="outer-body outer-body-2">
                        <article className="art-body fck scrollToTwo">
                            <p className="summary">A medical worker in Ho Chi Minh City has been the person to whom thousands are indebted as he has raised funds to cover the medical costs of poverty-stricken patients over the past ten years.</p>
                            <p>Le Minh Hien, deputy head of the coordinating unit for human transplant at Cho Ray Hospital, a major medical institution in Ho Chi Minh City, often takes a ride to infirmaries in southern Vietnamese provinces on the weekend.</p>
                            <p>Hien’s purpose is simple: to seek underprivileged patients, especially ones who are children with congenital heart condition, and bring them Cho Ray Hospital for free operations.</p>
                            <p>The outreach effort has lasted for three years, during which he came to the help of more than 200 people, but his community-welfare spirit started much earlier, nearly ten years ago.</p>
                            <p>During a decade, he has cumulatively solicited over VND80 billion (US$3.44 million) – a sum that covered medical treatment fees for over 10,000 poor patients, including hundreds of children.</p>
                            <figure data-fancybox="gallery" href="/img/photo/3-min.jpg" className="outer-img fancybox"><img src="/img/photo/3-min.jpg" alt="" />
                            </figure>
                            <p>Hien’s purpose is simple: to seek underprivileged patients, especially ones who are children with congenital heart condition, and bring them Cho Ray Hospital for free operations.</p>
                            <div className="player-demo" data-oembed-url="https://www.youtube.com/watch?v=-JFZa54Drx0">
                                <div><iframe scrolling="no" title="iframe" src="https://www.youtube.com/embed/-JFZa54Drx0?rel=0" style={{ border: 0, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute' }} /></div>
                                <p className="caption">Bề mặt tường ở Ngọ Môn được làm sạch bằng công nghệ phun rửa áp lực cao ở chế độ hơi nước nóng (steam cleaning) - Ảnh: NHẬT LINH</p>
                            </div>
                            <p>The outreach effort has lasted for three years, during which he came to the help of more than 200 people, but his community-welfare spirit started much earlier, nearly ten years ago.</p>
                            <p>During a decade, he has cumulatively solicited over VND80 billion (US$3.44 million) – a sum that covered medical treatment fees for over 10,000 poor patients, including hundreds of children.</p>
                            <figure data-fancybox="gallery" href="/img/photo/4-min.jpg" data-caption="A girl that Le Minh Hien helped leans against him in this provided photo." className="outer-img fancybox img-left"><img src="/img/photo/4-min.jpg" alt="" />
                                <figcaption>A girl that Le Minh Hien helped leans against him in this provided photo.</figcaption>
                            </figure>
                            <p>Hien’s purpose is simple: to seek underprivileged patients, especially ones who are children with congenital heart condition, and bring them Cho Ray Hospital for free operations.</p>
                            <p>The outreach effort has lasted for three years, during which he came to the help of more than 200 people, but his community-welfare spirit started much earlier, nearly ten years ago.</p>
                            <h2>h2</h2>
                            <h3>h3</h3>
                            <h4>h4</h4>
                            <p>The outreach effort has lasted for three years, during which he came to the help of more than 200 people, but his community-welfare spirit started much earlier, nearly ten years ago.</p>
                            <p>The outreach effort has lasted for three years, during which he came to the help of more than 200 people, but his community-welfare spirit started much earlier, nearly ten years ago.</p>
                            <p>During a decade, he has cumulatively solicited over VND80 billion (US$3.44 million) – a sum that covered medical treatment fees for over 10,000 poor patients, including hundreds of children.</p>
                            <figure data-fancybox="gallery" href="/img/photo/8-min.jpg" data-caption="A girl that Le Minh Hien helped leans against him in this provided photo." className="outer-img fancybox img-right"><img src="/img/photo/8-min.jpg" alt="" />
                                <figcaption>A girl that Le Minh Hien helped leans against him in this provided photo.</figcaption>
                            </figure>
                            <p>Hien’s purpose is simple: to seek underprivileged patients, especially ones who are children with congenital heart condition, and bring them Cho Ray Hospital for free operations.</p>
                            <p>The outreach effort has lasted for three years, during which he came to the help of more than 200 people, but his community-welfare spirit started much earlier, nearly ten years ago.</p>
                            <p>During a decade, he has cumulatively solicited over VND80 billion (US$3.44 million) – a sum that covered medical treatment fees for over 10,000 poor patients, including hundreds of children.</p>
                            <div className="block-related">
                                <ul>
                                    <li>
                                        <a href="/"><img src="/img/photo/7-min.jpg" alt="" /></a>
                                        <div className="des">
                                            <h3><a href="/" title="">Hien’s purpose is simple: to seek</a></h3>
                                            <p>TTC-Ông chủ Nhà Trắng đã được thết đãi những món ăn rất đặc trưng của Việt Nam và Hà Nội</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ul className="tool ui sticky two">
                                <li><span><i className="fa fa-facebook" aria-hidden="true" /></span></li>
                                <li><span><i className="fa fa-twitter" aria-hidden="true" /></span></li>
                                <li><span><i className="fa fa-envelope" aria-hidden="true" /></span></li>
                                <li><span><i className="fa fa-print" aria-hidden="true" /></span></li>
                                <li className="border-t"><span><i className="fa fa-heart" aria-hidden="true" /> </span>100</li>
                            </ul>
                        </article>
                    </div>
                    <p className="author">Tiến Hà</p>
                    <div className="tag-bar">
                        <div className="tag"><a href="/" title="">cố thủ tướng</a> <a href="/" title="">Phan Văn Khải</a> <a href="/" title="">Quốc tang</a> <a href="/" title="">Cố thủ tướng</a></div>
                    </div>
                    <div className="block-comment">
                        <WrapperCm />
                        <WriteComment />
                    </div>
                </div>
                <div className="box-300">
                    <div className="block-banner"><a href="/" title=""><img src="/img/banner-300x250.jpg" alt="" /></a></div> <span className="line-border-s mar-20" />
                    <div className="block-subscibe mar-20">
                        <form className="frm-subscibe">
                            <input type="text" className="txt-subscibe" placeholder="Email của bạn" />
                            <button className="btn-subscibe">Nhận tin</button>
                        </form>
                        <h4><i className="icon icon-mail" /> Đọc những tin tức nóng nhất trên TTC</h4>
                        <p>Bạn sẽ nhận được các tin nổi bật trên TTC, nếu không muốn bạn có thể tắt bất cứ lúc nào.</p>
                    </div> <span className="line-border mar-20" />
                    <div className="block-bar">
                        <h3 className="title-note"><a href="/" title="">Đáng chú ý</a></h3>
                        <article className="art-bar-b">
                            <a href="/"><img src="/img/photo/9-min.jpg" alt="" /></a>
                            <h4><a href="/" title="">Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                        </article>
                        <article className="art-bar-s art-hori">
                            <a href="/"><img src="/img/photo/8-min.jpg" alt="" /></a>
                            <div className="des">
                                <h4><a href="/" title="">Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                            </div>
                        </article>
                        <article className="art-bar-s art-hori">
                            <a href="/"><img src="/img/photo/7-min.jpg" alt="" /></a>
                            <div className="des">
                                <h4><a href="/" title="">Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                            </div>
                        </article>
                        <article className="art-bar-s art-hori">
                            <a href="/"><img src="/img/photo/6-min.jpg" alt="" /></a>
                            <div className="des">
                                <h4><a href="/" title="">Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                            </div>
                        </article>
                    </div>
                    <div className="block-bar block-banner ui sticky one"><a href="/" title=""><img src="/img/banner-300x250.jpg" alt="" /></a></div>
                </div>
            </div>

        )
    }
}
export default Row1ScrollToOne