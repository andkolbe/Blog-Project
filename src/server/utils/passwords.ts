import * as bcrypt from 'bcrypt';

const generateHash = (password: string) => {
    const salt = bcrypt.genSaltSync(12);
}