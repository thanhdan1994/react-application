import React, {Component} from 'react'
import Header from '../common/header/Header';
import Title from './content/Title'
import Row1 from './content/Row1';
import Row1ScrollToOne from './content/Row1ScrollToOne';
import ListEnter from './content/ListEnter';
import BlockEnter from './content/BlockEnter';

class DetailPage extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <>
                <Header />
                <div className="main">
                    <div className="container">
                        <Title />
                        <Row1 />
                        <Row1ScrollToOne />
                        <ListEnter />
                        <span className="line-border"></span>
                        <BlockEnter />
                    </div>
                </div>
            </>
        )
    }
}

export default DetailPage