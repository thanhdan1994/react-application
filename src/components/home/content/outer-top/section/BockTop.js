import React, { Component } from 'react'

class BlockTop extends Component {
    render() {
        let prior1 = this.props.objectList.prior1
        let prior2 = this.props.objectList.prior2
        return (
            <div className="block-top">
                <article className="art-top-1">
                    <a className="thumb" href={prior1.url} title={prior1.headline}>
                        <img src={prior1.thumbnail} alt={prior1.headline} />
                    </a>
                    <h1 className="hasComment"><a href={prior1.url} title={prior1.headline}>{prior1.headline}</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h1>
                    <p>{prior1.description}</p>
                </article>
                <article className="art-top-2">
                    <a className="thumb" href={prior2.url} title="">
                        <img src={prior2.thumbnail} alt={prior2.headline} />
                    </a>
                    <h2 className="hasComment"><a href={prior2.url} title={prior2.headline}>{prior2.headline}</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h2>
                </article>
            </div>
        )
    }
}

export default BlockTop