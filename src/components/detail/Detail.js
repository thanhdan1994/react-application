import React, {Component} from 'react'

class Detail extends Component {
    render() {
        function id ({match}) {
            return match.params.id
        }
        return (
            <h1>this is page detail {id}</h1>
        )
    }
}

export default Detail