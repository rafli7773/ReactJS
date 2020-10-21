import React, { Component } from 'react';

// import context
import { globalConsumer } from '../../context/globalContext';

export class CardProduct extends Component {

    render() {
        return (
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
                    </div>
                    <div className="col-md-6">
                        <div className="alert alert-success">{this.props.state.totalOrder}</div>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-danger" onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default globalConsumer(CardProduct);
