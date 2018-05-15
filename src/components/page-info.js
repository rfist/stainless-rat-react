import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPage} from "../reducers";

class PageInfo extends Component {
    constructor(props) {
        super(props);
        let {pageId} = this.props.match.params;
        this.state = {pageId, text: 'Loading...'};
    }
    componentWillMount() {
        this.props.fetchPage(this.props.match.params.pageId);
    }
    componentWillReceiveProps(props) {
        this.props.fetchPage(props.match.params.pageId);
    }
    createElement(el, index) {
        const regex = RegExp(/\d*(?=\])/g);
        if (regex.test(el)) {
            const link = '/page/' + parseInt(el.match(regex)[0]);
            return (
                <Link to={link} key={index}>{el}</Link>
            )
        } else return (
            <span key={index}>{el} </span>
        )
    }
    createParagraph(data, index) {
        return (
            <p key={index}>
                {data.split(' ').map(this.createElement)}
            </p>
        )
    }
    render() {
        return (
            <div>
                {this.props.text.split('\r\n').map(this.createParagraph.bind(this))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {text: state.text}
}

export default connect(mapStateToProps, {fetchPage})(PageInfo);
