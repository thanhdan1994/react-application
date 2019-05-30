import React, { Component } from 'react'
import BlockTop from './BockTop';
import OuterSlider from './OuterSlider';

class Section extends Component {
    render() {
        return (
            <section className="content">
                <BlockTop objectList={this.props.objectList}/>
                <OuterSlider objectList={this.props.objectList}/>
            </section>
        )
    }
}

export default Section