import React, { Fragment } from 'react'

function CardBlog({ data, remove, update, goDetail }) {
    return (
        <Fragment>
            <div className="col-md-4">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => goDetail(data.id)}>{data.title}</h5>
                        <p className="card-text">{data.body}</p>
                        <button className="btn btn-success mr-2" onClick={() => update(data)}>Update</button>
                        <button className="btn btn-danger" onClick={() => remove(data.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CardBlog
