import React, { useState, useEffect } from 'react'

// menggunakan hooks
function Hooks() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title change: ${count}`;
        return (() => {
            document.title = `React App`
        })
    })
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="alert alert-info">
                    Nilai: {count}
                </div>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Update</button>
            </div>
        </div>
    )
}

export default Hooks
