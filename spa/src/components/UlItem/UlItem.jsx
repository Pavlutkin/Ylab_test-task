import * as React from 'react';

export default class UlItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.children}
            </ul>
        )
    }
}