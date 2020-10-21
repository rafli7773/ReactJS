import Axios from 'axios';
import { rootPath } from './config';

const Put = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.put(`${rootPath}/${path}`, data).then(res => { resolve(res) }, (err) => reject(err))
    })
    return promise;
}

export default Put