import React, { Component } from 'react';

class LifeCycle extends Component {

    // constructor(props) {
    //     super(props)
    //     // console.log('constructor');
    // }
    state = {
        counter: 1
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary btn-block">Click : {this.state.counter}</button>
            </div>
        )
    }
}

export default LifeCycle;
