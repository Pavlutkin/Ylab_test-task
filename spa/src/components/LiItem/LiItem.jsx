import * as React from 'react';

export default class LiItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
        this.onClickTitle = this.onClickTitle.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title
        })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onClickTitle(e) {
        e.stopPropagation();
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {
        const {id, title, edit} = this.state;

        return (
            <li key={id} onClick={this.onClickTitle}>
                {edit ? <input onChange={this.onChangeTitle} value={title}/> : title}
                {this.props.children}
            </li>
        )
    }
}