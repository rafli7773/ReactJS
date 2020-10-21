import get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// GET
const getNewBlog = () => get(`posts?_sort=id&_order=desc`);

// POST
const postNewBlog = (data) => Post(`posts`, data);

// PUT
const putNewBLog = (data, id) => Put(`posts/${id}`, data);

// Delete
const deleteNewBlog = (id) => Delete(`posts/${id}`);

const API = {
    getNewBlog,
    postNewBlog,
    putNewBLog,
    deleteNewBlog
}

export default API;