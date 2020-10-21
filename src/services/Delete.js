import Axios from 'axios';
import { rootPath } from './config';

const Delete = (path) => {
    const promise = new Promise((resolve, reject) => {
        Axios.delete(`${rootPath}/${path}`).then((res) => {
            resolve(res.data);
        }, (err) => reject(err))
    })
    return promise
}

export default Delete;