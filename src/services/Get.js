import Axios from 'axios';
import { rootPath } from './config';

const get = (path) => {
    const promise = new Promise((resolve, reject) => {
        Axios.get(`${rootPath}/${path}`).then((res) => {
            resolve(res.data);
        }, (err) => reject(err))
    })
    return promise
}

export default get;