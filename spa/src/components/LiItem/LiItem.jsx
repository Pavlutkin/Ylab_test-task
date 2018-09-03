import * as React from 'react';

export default class LiItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            edit: false
        };
        this.onClickTitle = this.onClickTitle.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onBlurTitle = this.onBlurTitle.bind(this);
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onClickTitle(e) {
        e.stopPropagation();
        this.setState({
            edit: true
        });
        
    }

    onBlurTitle(e) {
        this.setState({
            edit: false
        });
    }

    render() {
        const {id, title, edit} = this.state;
        return (
            <li key={id} id={id} onClick={this.onClickTitle}>
                {edit ? <input id={id} onBlur={this.onBlurTitle} onChange={this.onChangeTitle} value={title} selectionstart={title.length} autoFocus/> : title}
                {this.props.children}
            </li>
        )
    }
}