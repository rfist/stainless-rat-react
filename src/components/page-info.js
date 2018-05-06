import React, {Component} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

class PageInfo extends Component {
    constructor(props) {
        super(props);
        let {pageId} = this.props.match.params;
        this.state = {pageId, data: 'Loading...'};
    }
    componentWillMount() {
        axios.get(`${API_URL}/page/${this.state.pageId}`).then( ({data}) => {
            this.setState({data});
        });
    }
    createElement(el, index) {
        const regex = RegExp(/\d*(?=\])/g);
        if (regex.test(el)) {
            const link = '/page/' + parseInt(el.match(regex)[0]);
            return (
                <a href={link} key={index}>{el}</a>
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
                {this.state.data.split('\r\n').map(this.createParagraph.bind(this))}
            </div>
        )
    }
}

export default PageInfo

