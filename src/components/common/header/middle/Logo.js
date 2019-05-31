import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Logo extends Component {
    render() {
        return (
            <h1>
                <Link to="/"className="sprite-tvo logoheader" title="Tuổi Trẻ CUoi" children={<img src="/img/logo-ttc-pc.svg" alt="" />}/>
            </h1>
        )
    }
}

export default Logo