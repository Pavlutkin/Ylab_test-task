import * as React from 'react';
import './LiItem.less';

export default class LiItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.id,
            title: this.props.title,
            edit: false
        };
        this.onClickTitle = this.onClickTitle.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onBlurTitle = this.onBlurTitle.bind(this);
    }

    onChangeTitle = (e) => {
        this.setState({
            title : e.target.value
        })
    }

    onClickTitle(e) {
        e.stopPropagation();
        this.setState({
            edit: true
        });
    }

    onEnterSave = (e) => {
        if(e.key === 'Enter') {
            this.setState({
                edit: false
            });
            const data = {
                id: this.state.id,
                title: this.state.title
            };
            this.props.onSaveItem(data);
        }
    }

    onBlurTitle = (e) => {
        this.setState({
            edit: false
        });
        //ToDo чтобы не отправлял тех же значений
        const data = {
            id: this.state.id,
            title: this.state.title
        };
        this.props.onSaveItem(data);
    }

    render() {
        const {id, title, edit} = this.state;
        return (
            <li className="container-list__item" id={id} key={id} onClick={this.onClickTitle}>
                {edit ? <input 
                            id={id}
                            className="container-list__input"
                            onKeyPress={this.onEnterSave}
                            onBlur={this.onBlurTitle}
                            onChange={this.onChangeTitle}
                            value={title}
                            selectionstart={title.length}
                            autoFocus
                        /> : title}
                {this.props.children}
            </li>
        )
    }
}