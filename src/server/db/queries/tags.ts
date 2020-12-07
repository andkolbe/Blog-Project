import { Query } from '../';
import type { CannedResponse, TTags } from '../models'; // writing type makes sure TTags isn't compliled into JS so it doesn't have the chance to screw with our code 

const all = () => Query<TTags[]>('SELECT * FROM tags');
const one = () => Query('', []);
const insert = (newTag: any) => Query<CannedResponse>('INSERT INTO tags SET ?', [newTag]);
const update = () => Query('', []);
const destroy = () => Query('', []);
const find = () => Query('', []);

export default {
    all,
    one,
    insert,
    update,
    destroy,
    find
}