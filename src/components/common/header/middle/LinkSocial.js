import React, { Component } from 'react'

class LinkSocial extends Component {
    render() {
        return (
            <li>
                <a href={this.props.href} title={this.props.title}>
                    <i className={this.props.class} aria-hidden="true" />
                </a>
            </li>
        )
    }
}

export default LinkSocial