import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class BlockTop extends Component {
    render() {
        let prior1 = this.props.objectList.prior1
        let prior2 = this.props.objectList.prior2
        return (
            <div className="block-top">
                <article className="art-top-1">
                    <Link to={prior1.url} className="thumb" title={prior1.headline} children={<img src={prior1.thumbnail} alt={prior1.headline} />}/>
                    <h1 className="hasComment"><a href={prior1.url} title={prior1.headline}>{prior1.headline}</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h1>
                    <p>{prior1.description}</p>
                </article>
                <article className="art-top-2">
                    <Link to={prior2.url} className="thumb" title={prior2.headline} children={<img src={prior2.thumbnail} alt={prior2.headline} />}/>
                    <h2 className="hasComment">
                        <Link to={prior2.url} title={prior2.headline} children={prior2.headline} />
                        <span className="outer-icon">
                            <span className="number">43</span><i className="icon icon-comment" />
                        </span>
                    </h2>
                </article>
            </div>
        )
    }
}

export default BlockTop