import React, { Component } from 'react'
import Section from './section/Section'
import Aside from './aside/Aside'

class OuterMid extends Component {
    render() {
        return (
            <div className="outer outer-mid  scrollToOne">
                <Section />
                <Aside />
            </div>

        )
    }
}

export default OuterMid