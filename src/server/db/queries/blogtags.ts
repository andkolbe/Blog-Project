import { Query } from '../';

const allForABlog = (blogid: number) => Query('CALL spBlogTags(?)', [blogid])

const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUE (?, ?)', [blogid, tagid]);

const destroy = (blogid: number) => Query('DELETE FROM blogtags WHERE blogid = ?', [blogid])

const update = (newTagid: number, oldTagid: number, blogid: number) => Query('UPDATE blogtags SET tagid = ? WHERE blogid = ? AND tagid = ?', [newTagid, blogid, oldTagid])


export default {
    allForABlog,
    insert,
    destroy,
    update
}