import * as mysql from 'mysql'; // must use ' * as ' if you are importing a library
import config from '../config';



const pool = mysql.createPool(config.mysql);

export const Query = (query, values?: any) => {
    return new Promise((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

import blogs from './queries/blogs';

export default {
    blogs
}

