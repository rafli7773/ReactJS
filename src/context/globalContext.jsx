import React, { createContext, Component } from 'react';

// react context
export const rootContext = createContext();
const Provider = rootContext.Provider;

// provider
function globalProvider(Children) {
    return (
        class ParentComponent extends Component {

            state = {
                totalOrder: 5
            }

            dispatch = (action) => {
                if (action.type === 'PLUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if (action.type === 'MINUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder - 1
                    })
                }
            }

            render() {
                return (
                    <Provider value={{ state: this.state, dispatch: this.dispatch }}>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}

export default globalProvider;

const Consumer = rootContext.Consumer;

export const globalConsumer = (Children) => {
    return (
        class parentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}
