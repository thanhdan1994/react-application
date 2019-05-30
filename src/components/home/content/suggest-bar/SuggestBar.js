import React, { Component } from 'react'

class SuggestBar extends Component {
    render() {
        let events = [
            {
                name: "Yeu quai trong thang may", href: "/chu-de/yeu-quai-trong-thang-may/1.html"
            },
            {
                name: "Nắng nóng", href: "/chu-de/nang-nong/8.html"
            },
            {
                name: "Nụ cười cõi mạng", href: "/chu-de/nu-cuoi-coi-mang/5.html"
            },
            {
                name: "U23", href: "/chu-de/u23/9.html"
            }
        ]

        let links = events.map((event, index) => {
            return <li key={index}><a href={event.href} title={event.name}>{event.name}</a></li>
        })
        return (
            <div className="suggest-bar">
                <ul className="subMenu-bottom">
                    <li><a href="/" rel="nofollow" title="Breaking news" className="icon-direction"> </a></li>
                    {links}
                </ul>
            </div>
        )
    }
}
export default SuggestBar