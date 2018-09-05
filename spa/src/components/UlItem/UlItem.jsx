import * as React from 'react';

export default class UlItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="container-list__list">
                {this.props.children}
            </ul>
        )
    }
}