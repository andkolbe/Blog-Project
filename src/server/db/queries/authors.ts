import { Query } from '../';
import type { TAuthors, CannedResponse } from '../models/';

const all = () => Query<TAuthors[]>('SELECT id, name FROM authors');
const one = () => Query('', []);
const insert = (newAuthor: any) => Query<CannedResponse>('INSERT INTO authors SET ?', newAuthor); // strong typing CannedResponse gives us autocomplete support
// const insert (name: string, email: string) => Query<CannedResponse>('INSERT INTO authors (name, email) VALUE (?, ?)', [name, email]);
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