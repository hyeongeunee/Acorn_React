import { Component } from 'react';

class MyCounter extends Component {
    state = {
        count: 0,
    };

    render() {
        return (
            <div>
                <button>-</button>
                <strong>{this.state.count}</strong>
                <button>+</button>
            </div>
        );
    }
}

export default MyCounter;
