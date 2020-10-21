import React, { Component, Fragment } from 'react';
import { globalConsumer } from '../../context/globalContext';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="mb-3">Home {this.props.state.totalOrder} </h1>
            </Fragment>
        )
    }
}

export default globalConsumer(Home);