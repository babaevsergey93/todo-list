import React from 'react';
import { increment, decrement } from '../../actions/PageActions';
import { connect } from 'react-redux';
import './Counter.css';

 class Counter extends React.Component {
    render(){
        return (
            <div className="counter-container">
                <button className="btn" onClick={this.props.increment}>+</button>
                <h1 className="counter-value">{this.props.count}</h1>
                <button className="btn" onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}

const stateToProps = (store) => ({
    count: store.count
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
});

export default connect(stateToProps, mapDispatchToProps)(Counter);
