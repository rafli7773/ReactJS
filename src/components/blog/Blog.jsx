import React, { Component, Fragment } from 'react';
import CardBlog from './CardBlog';
import API from '../../services/index';

export class Blog extends Component {
    state = {
        post: [],
        form: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        }, isUpdate: false
    }

    getAPI = () => {
        API.getNewBlog().then(res => {
            this.setState({
                post: res
            })
        })
    }

    removeAPI = (id) => {
        API.deleteNewBlog(id).then(() => this.getAPI());
    }

    handleFormChange = (e) => {
        let newForm = { ...this.state.form };
        newForm[e.target.name] = e.target.value;
        if (!this.state.isUpdate) {
            newForm['id'] = new Date().getTime();
        }
        this.setState({
            form: newForm
        })
    }

    postAPI = () => {
        API.postNewBlog(this.state.form).then(() => {
            this.getAPI();
            this.setState({
                form: {
                    userId: 1,
                    id: 1,
                    title: '',
                    body: ''
                }
            })
        })
    }

    handleUpdate = (data) => {
        this.setState({
            form: data,
            isUpdate: true
        })
    }

    updateAPI = () => {
        API.putNewBLog(this.state.form, this.state.form.id).then(() => {
            this.getAPI();
            this.setState({
                isUpdate: false,
                form: {
                    userId: 1,
                    id: 1,
                    title: '',
                    body: ''
                }
            })
        })
    }

    onClickAdd = (e) => {
        e.preventDefault();
        if (this.state.isUpdate) {
            this.updateAPI();
        } else {
            this.postAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/blog/${id}`);
    }

    componentDidMount() {
        this.getAPI();
    }

    render() {
        return (
            <Fragment>
                <div className="row mb-4">
                    <div className="col-md-8">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input type="text" value={this.state.form.title} className="form-control" onChange={this.handleFormChange} name="title" placeholder="Title.." />
                                </div>
                                <div className="col">
                                    <input type="text" value={this.state.form.body} className="form-control" onChange={this.handleFormChange} name="body" placeholder="Body.." />
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary float-left" onClick={this.onClickAdd}>Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    {this.state.post.map(post => (
                        <CardBlog key={post.id} data={post} remove={(id) => this.removeAPI(id)} update={(data) => this.handleUpdate(data)} goDetail={(id) => this.handleDetail(id)} />
                    ))}
                </div>
            </Fragment>
        )
    }
}

export default Blog
