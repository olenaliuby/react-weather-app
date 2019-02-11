import React from 'react';

class Error extends React.Component {
    render() {
        return (
            <h1 class="error">
                {this.props.error}
            </h1>
        )
    }
}

export default Error;