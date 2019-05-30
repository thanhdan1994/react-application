import React, { Component } from 'react'

class Aside extends Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="block-bar ui sticky one">
                    <h3 className="title-note"><a href="/" title="">Đáng chú ý</a></h3>
                    <div className="inner-gray">
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
                </div>
            </aside>
        )
    }
}

export default Aside