import React, { Component, Fragment } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

export class DetailBlog extends Component {

    state = {
        post: []
    }

    getAPI = () => {
        let id = this.props.match.params.id;
        Axios.get(`http://localhost:3004/posts/${id}`).then((res) => this.setState({
            post: res.data
        }))
    }

    componentDidMount() {
        this.getAPI();
    }

    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="card-header">
                        <h1>Detail</h1>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <h2>{this.state.post.title}</h2>
                            <h3>{this.state.post.body}</h3>
                        </blockquote>
                        <Link to="/blog"><button className="btn btn-primary">Kembali</button></Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DetailBlog
