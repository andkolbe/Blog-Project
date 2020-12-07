import { Query } from '../';

const all = () => Query('', []);
const allForABlog = (blogid: number) => Query('CALL spBlogTags(?)', [blogid])
const one = () => Query('', []);
const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUE (?, ?)', [blogid, tagid]);
const update = () => Query('', []);
const destroy = () => Query('', []);
const find = () => Query('', []);

export default {
    all,
    allForABlog,
    one,
    insert,
    update,
    destroy,
    find
}