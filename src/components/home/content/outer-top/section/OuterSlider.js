import React, { Component } from 'react'

class OuterSlider extends Component {
    render() {
        let prior3 = this.props.objectList.prior3;
        let items = prior3.map((object, index) => {
            return <div className="slide_item" key={index}>
                        <article className="art-slider">
                            <a className="thumb" href={object.url}><img src={object.thumbnail} alt="1" /></a>
                            <h3 className="hasComment"><a href={object.url} title={object.headline}>{object.headline}</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h3>
                        </article>
                    </div>
        })
        return (
            <div className="outer-slider">
                <div className="slider single-top">
                    {items}
                </div>
            </div>
        )
    }
}

export default OuterSlider