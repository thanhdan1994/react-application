import React, { Component } from 'react'
import SuggestBar from './suggest-bar/SuggestBar';
import OuterTop from './outer-top/OuterTop';
import OuterMid from './outer-mid/OuterMid';
import BlockVideo from './block-video/BlockVideo';
import BlockLaugh from './block-laugh/BlockLaugh';
import BlockEnter from './block-enter/BlockEnter';
import BlockLast from './block-last/BlockLast';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <SuggestBar />
                    <OuterTop />
                    <span className="line-border"></span>
                    <OuterMid />
                    <span className="line-border"></span>
                    <BlockVideo />
                    <span className="line-border"></span>
                    <BlockLaugh />
                    <span className="line-border"></span>
                    <BlockEnter />
                    <span className="line-border"></span>
                    <BlockLast />
                </div>
            </div>
        );
    }
}
export default Content