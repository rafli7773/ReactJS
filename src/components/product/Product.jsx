import React, { Component } from 'react';
import CardProduct from './CardProduct';

// import context
import { globalConsumer } from '../../context/globalContext';

export class product extends Component {

    render() {
        return (
            <div className="card mb-5" >
                <div className="alert alert-warning">{this.props.state.totalOrder}</div>
                <CardProduct />
            </div>
        )
    }
}

export default globalConsumer(product);
