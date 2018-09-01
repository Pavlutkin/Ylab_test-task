import React from "react";
import {connect} from 'react-redux';
import UlItem from '../../components/UlItem/UlItem';
import LiItem from '../../components/LiItem/LiItem';
import {getList} from '../../store/reducer';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.actions.getList();
        
    }

    getElementForRender(element) {
        const list = this.props.list;
        console.log(list);
        const childrenList = list.filter(item => item.parent === element.id);
        console.log(childrenList);
        return childrenList.length
        ? {
            id: element.id,
            title: element.title,
            childrenList: childrenList.map(element => this.getElementForRender(element))
        }
        : {
            id: element.id,
            title: element.title
        };
    };

    renderElement (element) {
        const {id, title, childrenList } = element;
        return childrenList ? (
        <LiItem
            key={id}
            id={id}
            title={title}
        >
            {this.props.children}
            <UlItem>{childrenList.map(element => this.renderElement(element))}</UlItem>
        </LiItem>
        ) : (
        <LiItem
            key={id}
            id={id}
            title={title}
        >
            {this.props.children}
            </LiItem>
        );
    };

    render() {
        const {list} = this.props;
        let rootItem = {};
        list.map((item) => {
            if(item.parent === null) {
                rootItem = item;
            }
        });
        const rootElement = this.getElementForRender(rootItem);
        
        return(
            <UlItem>
                {this.renderElement(rootElement)}
            </UlItem>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.list
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getList: () => {
                dispatch(getList())
            }
        }
    }  
};

const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent);

export default List;
