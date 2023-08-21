import { Component } from 'react';

class MyCounter extends Component {
    state = {
        count: 0,
    };

    render() {
        return (
            <div>
                <button onClick={this.state.count - 1}>-</button>
                <strong>{this.state.count}</strong>
                <button onClick={this.state.count + 1}>+</button>
            </div>
        );
    }
}

export default MyCounter;
