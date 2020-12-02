import { Query } from '../index';

const all = () => Query('SELECT * FROM blogs');

export default {
    all
}