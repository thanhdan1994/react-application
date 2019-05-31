import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class OuterSlider extends Component {
    render() {
        let prior3 = this.props.objectList.prior3;
        let items = prior3.map((object, index) => {
            return <div className="slide_item" key={index}>
                        <article className="art-slider">
                            <Link to={object.url} className="thumb" title={object.headline} children={<img src={object.thumbnail} alt={object.headline} />}/>
                            <h3 className="hasComment">
                                <Link to={object.url}title={object.headline} children={object.headline}/>
                                <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span>
                            </h3>
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